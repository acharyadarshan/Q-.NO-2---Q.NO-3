
const formulatePayment = (choice, amount) => {
    const initialPayment = ((10 / 100) * amount).toFixed(2);
    const remainingTotal = amount - initialPayment;
    
    if (choice == 'weekly') {
        let numberOfWeeks = 0
        let payment = 0
        
        weeklyAmountPayment = remainingTotal/156
        if(weeklyAmountPayment % 100 > 50){
            payment = Math.ceil(weeklyAmountPayment/100)*100
        }else{
            payment = weeklyAmountPayment + 50- weeklyAmountPayment%100
        }
        
        numberOfWeeks = Math.ceil(remainingTotal/payment)
        
        console.log(`You will be paid ${payment} for ${numberOfWeeks} weeks.`);
        return { time: numberOfWeeks, amount: payment };

    }
        
    else if (choice == 'monthly') {
        
        monthlyAmountPayment = remainingTotal / 36;
        payment = Math.ceil(monthlyAmountPayment/100)*100
        numberOfMonths = Math.ceil(remainingTotal/payment)
        
        console.log(`You will be paid ${payment} for ${numberOfMonths} months.`);
        return { time: numberOfMonths, amount: payment };
    
        
        
    } else {
            return null;
        }
    };
    
formulatePayment('weekly', 770)
formulatePayment('monthly', 11990)
