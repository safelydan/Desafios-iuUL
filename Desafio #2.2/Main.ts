import CurrencyConverter from './CurrencyConverter';

async function main() {
    const converter = new CurrencyConverter('aca31cd88e75552d3c7fe3f6');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Moeda origem (por exemplo USD): ', async (fromCurrency) => {
        readline.question('Moeda destino (por exemplo EUR): ', async (toCurrency) => {
            readline.question('Valor a ser convertido: ', async (amountInput) => {
                const amount = parseFloat(amountInput);
                
                const result = await converter.convertCurrency(fromCurrency.toUpperCase(), toCurrency.toUpperCase(), amount);
                
                if (typeof result === 'string') {
                    console.error(result);
                } else {
                    console.log(`${amount} ${fromCurrency} => ${result.convertedAmount} ${toCurrency}`);
                    console.log(`Taxa: ${result.exchangeRate}`);
                }

                readline.close();
            });
        });
    });
}

main();
