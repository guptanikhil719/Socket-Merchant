function stockAndCount( n, arr ) {
    let pairs = 0;
    const colors = arr.reduce((acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});

    Object.keys(colors).forEach( n => {
        let _pair = parseInt( colors[n] / 2);
        if ( _pair >= 1 ) pairs += _pair;
    });

    return pairs;
}
