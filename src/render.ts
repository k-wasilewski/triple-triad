const sizeOne = `
+---+
| 1 |
|4L2|
| 3 |
+---+
`;

const render = (board: any) => {
    const size = Math.sqrt(board.length);
    
    const colsMultiplied = multiplyCols(sizeOne, size);
    const rowsMultiplied = multiplyRows(colsMultiplied, size);

    const ret = replaceValues(rowsMultiplied, size, board);

    return ret;
}

const replaceValues = (rowsMultiplied: string, size: number, board: any) => {
    const arr2d = rowsMultiplied.split('\n').map(row => row.split(''));

    let xPos;
    let yPos;
    for (let row=0; row<size; row++) {
        for (let col=0; col<size; col++) {
            if (row==0) yPos = 1;
            else yPos = 1 + 5*row;
            if (col==0) xPos = 2;
            else xPos = 2 + 5*col;

            const boardIdx = (row ? (size * row) : 0) + col;

            arr2d[yPos+1][xPos] = board[boardIdx] ? board[boardIdx][0] : ' ';
            arr2d[yPos][xPos] = board[boardIdx] ? board[boardIdx][1][0] : ' ';
            arr2d[yPos+1][xPos+1] = board[boardIdx] ? board[boardIdx][1][1] : ' ';
            arr2d[yPos+2][xPos] = board[boardIdx] ? board[boardIdx][1][2] : ' ';
            arr2d[yPos+1][xPos-1] = board[boardIdx] ? board[boardIdx][1][3] : ' ';
        }
    }

    return arr2d.map(row => row.join('')).join('\n');
}

const multiplyCols = (board: string, n: number) => {
    const rows = board.split('\n')
        .filter((s: string) => s.length)
        .map((s: string) => {
            let cumul: string = s;
            for (let i=1; i<n; i++) {
                cumul = cumul + s;
            }
            return cumul;
        }).join('\n');
    return rows;
}

const multiplyRows = (board: string, n: number) => {
    let cumul: string = board;
    for (let i=1; i<n; i++) {
        cumul = cumul + '\n' + board;
    }
    return cumul;
}

export default render;