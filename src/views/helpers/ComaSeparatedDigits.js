export default class ComaSeparatedDigits {
    comaSeparate(data) {
        let num_parts = data.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let amount = num_parts.join(".");

        return amount
    }

    comaSeparateLakh(data) {
        // let num_parts = data.toString().split(".");
        // var lastThree = num_parts.substring(x.length-3);
        // num_parts[0] = num_parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        // let amount = num_parts.join(".");

        let x = data.toString();
        let lastThree = x.substring(x.length - 3);
        let otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

        return res
    }
}