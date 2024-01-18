---
language: csharp
level: 2
hide_sidebar: true
publish_date: 2016-06-12
last_update:
  date: 2023-03-29
---

## A Solution

First, here is a primer on Split Testing.

> ### Split Testing
>
> Split testing is a simple way to experiment with an application's features to see which changes lead to higher user engagement. A simple example would be testing variations of an e-mail landing page to see if more people sign up. In such a split test there would be the control (how the application looks and behaves now) and variants (e.g., 2 or 3 changes that could include changing text or images on the page, element positioning, color of the submit button, etc).
>
> Once the variants are configured, they are put into rotation, and the experiment starts. During this experiment each user will see a different version of the feature and their engagement with it will be tracked. Split tests live for the length of the experiment or until a winner is found (e.g., tracking indicates that a variant converted higher than the control). If no winner is found, new variants may be created and another experiment tried. If a winner is found, then the winning variant becomes the new control and the feature gets updated accordingly.

Thankfully there are some standard opt-out mechanisms built into A/B testing platforms. They tend to come in the form of an appended URL or forging a cookie.

Let's start with an example for each approach with a popular A/B testing platform, [Optimizely](https://www.optimizely.com/).

## Example

Our example page is from [the-internet](http://github.com/tourdedave/the-internet) and can be seen [here](http://the-internet.herokuapp.com/abtest). There are three different variants of the page that are available, each with different heading text:

- Control: `A/B Test Control`
- Variation 1: `A/B Test Variation 1`
- Opt-out: `No A/B Test`

Let's start things off by including our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), and start our class with some setup and teardown methods.

```csharp
// filename: ABTestOptOut.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

public class ABTestOptOut
{
    IWebDriver Driver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Now let's wire up our first test to step through visiting the page and verifying that the text changes as we forge an opt-out cookie.

```csharp
// filename: ABTestOptOut.cs
// ...
    [Test]
    public void OptOutWithCookieAfterVisitingPage()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");
        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;
        Assert.That(HeadingText.StartsWith("A/B Test"));
        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));
        Driver.Navigate().Refresh();
        HeadingText = Driver.FindElement(By.TagName("h3")).Text;
        Assert.That(HeadingText.StartsWith("No A/B Test"));
    }
// ...
```

After navigating to the page we confirm that we are in one of the A/B test groups by grabbing the heading text and checking to see if it starts with the text `"A/B Test"`. After that we add the opt-out cookie, refresh the page, and then confirm that we are no longer in the A/B test group by checking the heading text again.

We could also load the opt-out cookie _before_ navigating to the page.

```csharp
// filename: ABTestOptOut.cs
// ...
    [Test]
    public void OptOutWithCookieBeforeVisitingPage()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");
        Driver.Manage().Cookies.AddCookie(new Cookie("optimizelyOptOut", "true"));
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest");
        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;
        Assert.That(HeadingText.StartsWith("No A/B Test"));
    }
// ...
```

Here we are navigating to the main page of the site first (to establish the host) and then adding the opt-out cookie. If we didn't visit the site first, then adding the cookie wouldn't have worked. Once added we navigate to the example page and perform our checks just like before.

Alternatively, we can achieve the same thing without forging a cookie. Instead we can append an opt-out query to the URL when visiting the page.

```csharp
// filename: ABTestOptOut.cs
// ...
    [Test]
    public void OptOutWithURL()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/abtest?optimizely_opt_out=true");
        Driver.SwitchTo().Alert().Dismiss();
        Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(20);
        string HeadingText = Driver.FindElement(By.TagName("h3")).Text;
        Assert.That(HeadingText.StartsWith("No A/B Test"));
    }
}
```

By appending `?optimizely_opt_out=true` to the URL we achieve the same outcome as with forging a cookie. But keep in mind that this approach triggers a JavaScript alert, so we have to switch to it and dismiss it (e.g., `Driver.SwitchTo().Alert().Dismiss();`) before performing our assertion.

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\ABTestOptOut.sln` from the command-line) here is what will happen:

- Open the browser
- Opt-out of the split tests (either by cookie or appended URL)
- Visit the split testing page
- Grab the header text
- Confirm that the session is opted out of the split tests
- Close the browser

## Summary

Hopefully this tip was helpful in guiding you in different methods of how to opt out of split tests.

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')