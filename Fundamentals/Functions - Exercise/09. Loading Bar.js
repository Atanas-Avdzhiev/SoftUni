function loadingBar(number) {

    let percent = '%'.repeat(number / 10)
    let dot = '.'.repeat(10 - (number / 10))
    
    if (number === 100) {
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    }
    else {
        console.log(`${number}% [${percent}${dot}]`)
        console.log('Still loading...')
    }
}
loadingBar(100)