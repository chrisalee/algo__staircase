function staircase(n) {
    let output = '';
    for(let row = 1; row <= n; row++) {
        for(let spaces = n-1; spaces >=row; spaces--){
            output += ' ';
        };
        for(let hashes = 1; hashes <= row; hashes++){
            output += '#';
        };    
        output += '\n';    
    }
    console.log(output);
    return output;
}

staircase(6);
