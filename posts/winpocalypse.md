---
title: Winpocalypse
publishedAt: 2024-07-20
summary: A global update from CrowdStrike caused Windows computers to crash, highlighting the risks of relying on Windows for critical infrastructure.
---

Yesterday, on July 18th, 2024 (Pacific Time), the world was in chaos. CrowdStrike pushed a faulty global update that affected millions of Windows computers. The scale of this incident was HUGE. I'm still in shock that so much of our important infrastructure relies on Windows. This incident is a major opportunity to discuss why Windows can be problematic as an operating system.

# Short Recap

On July 18th, 2024, at around 10:20 PM PT, CrowdStrike pushed an automatic global update that caused Windows computers to get stuck in a [boot-loop](https://en.wikipedia.org/wiki/Bootloop). The `.sys` file that was pushed was corrupted, and a register was pointing to a `NULL` pointer, causing the boot-loader to crash. Fortunately, CrowdStrike quickly introduced a temporary solution.

Thousands of flights were canceled worldwide, and many online payment gateways, banks, and hospitals were affected.

# Real talk

Let's talk about the main issue here. It's surprising that many companies still use Windows servers for important infrastructure. I believe Windows was never meant to be used as a server platform. I'm not saying never use Windows servers; there are certain use cases and situations where Windows fits best. But those are rare—maybe 1% of the cases. Important infrastructure should not rely on closed-source software.

Secondly, why was there an automatic update? I understand that automatic updates are necessary for critical zero-day exploits. But was this update so essential that it had to be pushed automatically? Why wasn't it tested on a smaller scale before being released?

Lastly, the Windows codebase is a mess. It's a huge stack of patches that Microsoft has never seriously considered optimizing or making more efficient.

# listen...

I am always going to be linux nerd for the rest of my life and would **NEVER** even consider windows as primary operating system. I don't like to depend on a single company that is closed-source by nature.

I am not claiming that Linux is the best. The Linux ecosystem has also experienced issues, such as the recent [XZ Utils backdoor incident](https://en.wikipedia.org/wiki/XZ_Utils_backdoor), which created significant disruption and was more severe than the CrowdStrike issue. However, such occurrences are infrequent within the Linux ecosystem. When they do happen, there is typically transparent documentation and investigation available online, reducing confusion about the events.

Additionally, Linux distributions benefit from multiple layers of verification and contributions from the community, which help prevent such incidents from becoming widespread. For example, the XZ backdoor had a minimal impact on servers and was quickly investigated and patched.

---

So, let's not windows for critical infrastructure, unless we want to turn the apocalypse into a feature.
