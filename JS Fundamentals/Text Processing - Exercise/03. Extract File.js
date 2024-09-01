function solve(path) {

    let pathArray = path.split('\\').pop().split('.');
    let fileExtension = pathArray.pop();
    let fileName = pathArray.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
solve('C:\\Internal\\training-internal\\template.bak.pptx')