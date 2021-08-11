<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [If you come from bash you might have to change your $PATH.](#if-you-come-from-bash-you-might-have-to-change-your-path)
- [export PATH=$HOME/bin:/usr/local/bin:$PATH](#export-pathhomebinusrlocalbinpath)
- [Path to your oh-my-zsh installation.](#path-to-your-oh-my-zsh-installation)
- [Set name of the theme to load. Optionally, if you set this to "random"](#set-name-of-the-theme-to-load-optionally-if-you-set-this-to-random)
- [it'll load a random theme each time that oh-my-zsh is loaded.](#itll-load-a-random-theme-each-time-that-oh-my-zsh-is-loaded)
- [See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes](#see-httpsgithubcomrobbyrusselloh-my-zshwikithemes)
- [Set list of themes to load](#set-list-of-themes-to-load)
- [Setting this variable when ZSH_THEME=random](#setting-this-variable-when-zsh_themerandom)
- [cause zsh load theme from this variable instead of](#cause-zsh-load-theme-from-this-variable-instead-of)
- [looking in ~/.oh-my-zsh/themes/](#looking-in-oh-my-zshthemes)
- [An empty array have no effect](#an-empty-array-have-no-effect)
- [ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )](#zsh_theme_random_candidates-robbyrussell-agnoster-)
- [Uncomment the following line to use case-sensitive completion.](#uncomment-the-following-line-to-use-case-sensitive-completion)
- [CASE_SENSITIVE="true"](#case_sensitivetrue)
- [Uncomment the following line to use hyphen-insensitive completion. Case](#uncomment-the-following-line-to-use-hyphen-insensitive-completion-case)
- [sensitive completion must be off. _ and - will be interchangeable.](#sensitive-completion-must-be-off-_-and---will-be-interchangeable)
- [HYPHEN_INSENSITIVE="true"](#hyphen_insensitivetrue)
- [Uncomment the following line to disable bi-weekly auto-update checks.](#uncomment-the-following-line-to-disable-bi-weekly-auto-update-checks)
- [Uncomment the following line to change how often to auto-update (in days).](#uncomment-the-following-line-to-change-how-often-to-auto-update-in-days)
- [export UPDATE_ZSH_DAYS=13](#export-update_zsh_days13)
- [Uncomment the following line to disable colors in ls.](#uncomment-the-following-line-to-disable-colors-in-ls)
- [DISABLE_LS_COLORS="true"](#disable_ls_colorstrue)
- [Uncomment the following line to disable auto-setting terminal title.](#uncomment-the-following-line-to-disable-auto-setting-terminal-title)
- [DISABLE_AUTO_TITLE="true"](#disable_auto_titletrue)
- [Uncomment the following line to enable command auto-correction.](#uncomment-the-following-line-to-enable-command-auto-correction)
- [ENABLE_CORRECTION="true"](#enable_correctiontrue)
- [Uncomment the following line to display red dots whilst waiting for completion.](#uncomment-the-following-line-to-display-red-dots-whilst-waiting-for-completion)
- [COMPLETION_WAITING_DOTS="true"](#completion_waiting_dotstrue)
- [Uncomment the following line if you want to disable marking untracked files](#uncomment-the-following-line-if-you-want-to-disable-marking-untracked-files)
- [under VCS as dirty. This makes repository status check for large repositories](#under-vcs-as-dirty-this-makes-repository-status-check-for-large-repositories)
- [much, much faster.](#much-much-faster)
- [DISABLE_UNTRACKED_FILES_DIRTY="true"](#disable_untracked_files_dirtytrue)
- [Uncomment the following line if you want to change the command execution time](#uncomment-the-following-line-if-you-want-to-change-the-command-execution-time)
- [stamp shown in the history command output.](#stamp-shown-in-the-history-command-output)
- [You can set one of the optional three formats:](#you-can-set-one-of-the-optional-three-formats)
- ["mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"](#mmddyyyyddmmyyyyyyyy-mm-dd)
- [or set a custom format using the strftime function format specifications,](#or-set-a-custom-format-using-the-strftime-function-format-specifications)
- [see 'man strftime' for details.](#see-man-strftime-for-details)
- [HIST_STAMPS="yyyy-mm-dd"](#hist_stampsyyyy-mm-dd)
- [Would you like to use another custom folder than $ZSH/custom?](#would-you-like-to-use-another-custom-folder-than-zshcustom)
- [ZSH_CUSTOM=/path/to/new-custom-folder](#zsh_custompathtonew-custom-folder)
- [Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)](#which-plugins-would-you-like-to-load-plugins-can-be-found-in-oh-my-zshplugins)
- [Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/](#custom-plugins-may-be-added-to-oh-my-zshcustomplugins)
- [Example format: plugins=(rails git textmate ruby lighthouse)](#example-format-pluginsrails-git-textmate-ruby-lighthouse)
- [Add wisely, as too many plugins slow down shell startup.](#add-wisely-as-too-many-plugins-slow-down-shell-startup)
- [User configuration](#user-configuration)
- [export MANPATH="/usr/local/man:$MANPATH"](#export-manpathusrlocalmanmanpath)
- [You may need to manually set your language environment](#you-may-need-to-manually-set-your-language-environment)
- [export LANG=en_US.UTF-8](#export-langen_usutf-8)
- [Preferred editor for local and remote sessions](#preferred-editor-for-local-and-remote-sessions)
- [if [[ -n $SSH_CONNECTION ]]; then](#if---n-ssh_connection--then)
- [export EDITOR='vim'](#export-editorvim)
- [else](#else)
- [export EDITOR='mvim'](#export-editormvim)
- [fi](#fi)
- [Compilation flags](#compilation-flags)
- [export ARCHFLAGS="-arch x86_64"](#export-archflags-arch-x86_64)
- [ssh](#ssh)
- [export SSH_KEY_PATH="~/.ssh/rsa_id"](#export-ssh_key_pathsshrsa_id)
- [Set personal aliases, overriding those provided by oh-my-zsh libs,](#set-personal-aliases-overriding-those-provided-by-oh-my-zsh-libs)
- [plugins, and themes. Aliases can be placed here, though oh-my-zsh](#plugins-and-themes-aliases-can-be-placed-here-though-oh-my-zsh)
- [users are encouraged to define aliases within the ZSH_CUSTOM folder.](#users-are-encouraged-to-define-aliases-within-the-zsh_custom-folder)
- [For a full list of active aliases, run `alias`.](#for-a-full-list-of-active-aliases-run-alias)
- [](#)
- [Example aliases](#example-aliases)
- [alias zshconfig="mate ~/.zshrc"](#alias-zshconfigmate-zshrc)
- [alias ohmyzsh="mate ~/.oh-my-zsh"](#alias-ohmyzshmate-oh-my-zsh)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/qiaoling/.oh-my-zsh"

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to load
# Setting this variable when ZSH_THEME=random
# cause zsh load theme from this variable instead of
# looking in ~/.oh-my-zsh/themes/
# An empty array have no effect
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="yyyy-mm-dd"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  zsh-autosuggestions
  git
  bundler
  osx
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# User configuration
DEFAULT_USER="ql"

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
export PATH="/usr/local/opt/python@3.8/bin:$PATH"
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
