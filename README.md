# 📱 Appium + WebDriverIO Setup Guide

This document explains how to configure your environment to run mobile automation tests using **Appium** and **WebDriverIO**.

---

## ⚙️ General System Requirements

To use Appium with WebDriverIO, make sure the following components are installed on your system:

###  Node.js
We need **Node.js** to easily install Appium (beta version) and its drivers.

🔗 **Download Node.js** depending on your operating system:  
👉 [https://nodejs.org](https://nodejs.org)

---

### Java JDK & `JAVA_HOME` Variable
1. Install OpenJDK
2. Open the **Start Menu** and search for `Environment Variables`.
3. Click **Edit the system environment variables**.
4. In the **System Properties** window, click **Environment Variables...**
5. Under **System variables**, click **New...**  
   - **Variable name:** `JAVA_HOME`  
5. Click **OK** to save.

## Add Java PATH

1. In the **Environment Variables** window, under **System variables**, select `Path`.
2. Click **Edit → New** and add:  
   ```text
   %JAVA_HOME%\bin

---
###  Android Setup

To set up your development environment, follow these steps:

- [Android Studio](https://developer.android.com/studio)
- [ANDROID_HOME setup for Windows](#android_home-setup-for-windows)

----
###  WebDriverIO
- Run scripts using
 ```text
    npx wdio
