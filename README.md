Peeb
====

![Peeb](peeb.png)

A Discord bot for Final Fantasy XIV servers, find out more at [peeb.gg](https://peeb.gg).

Setup
-----

1. Install [nvm] for macOS or [nvm-windows] for Windows.
2. Install [Node].
3. Install [Angular CLI].

### macOS

Run the following zsh commands in the project's directory, [Homebrew] will also be installed:

```zsh
% /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
% brew install nvm
% nvm install
% npm install -g @angular/cli
```

### Windows

Run the following PowerShell commands in the project's directory, [Choclatey] will also be installed:

```powershell
> iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
> choco install nvm
> nvm install 16.5.0
> nvm use 16.5.0
> npm install -g @angular/cli
```

Build
-----

```zsh
% npm run build
```

Run
---

```zsh
% npm start
```

Test
----

```zsh
% npm test
```

[Angular CLI]: https://angular.io/cli
[Choclatey]: https://chocolatey.org
[Homebrew]: https://brew.sh
[Node]: http://nodejs.org
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
