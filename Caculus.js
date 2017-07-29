class Pheptinh{
    constructor(a,b,pheptinh){
        this.a = a;
        this.b = b;
        this.pheptinh = pheptinh;
    }

    getResultString()
    {
        var numa=parseInt(this.a);
        var numb = parseInt(this.b);
        var result;
        switch (this.pheptinh) {
            case 'cong':
                result = numa + numb;
                return `${numa} + ${numb} = ${result}`;
                break;
            case 'tru':
                result = numa - numb;
                return `${numa} - ${numb} = ${result}`;
                break;
            case 'nhan':
                result = numa * numb;
                return `${numa} * ${numb} = ${result}`;
                break;
            case 'chia':
                result = numa / numb;
                return `${numa} / ${numb} = ${result}`;
                break;
            default:
                break;
        }

    }
}

module.exports = Pheptinh;

// var abc = new Pheptinh(5,6,'cong');
// console.log(abc.getResultString())