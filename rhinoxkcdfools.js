load('env.rhino.js');

load('jquery.js');
load('jquery.hotkeys-0.7.9.js');
load('jquery.konami.js');
load('jquery.browser.js');

Envjs("index.html");

load('cli.js');
load('xkcd_cli.js');

jQuery.ready();

reader = new Packages.jline.ConsoleReader();
reader.setDefaultPrompt(Terminal.config.prompt);
Terminal.setPromptActive(true);

while(Terminal.promptActive) {
    Terminal.output.process(Terminal, reader.readLine() + '');
}
