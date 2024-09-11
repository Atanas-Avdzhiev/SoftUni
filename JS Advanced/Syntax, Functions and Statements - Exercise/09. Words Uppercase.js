function solve(text) {

    text = text.toUpperCase();
    text = text.split(/\W+/);
    text = text.filter(x => !!x);
    text = text.join(', ');
    console.log(text);

}
solve('Hi, how are you?');