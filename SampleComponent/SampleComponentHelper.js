({
    getResponse: function(component) {
        console.log('I m inside the helper');
        var action = component.get("c.getCalloutResponseData");
        action.setParams({
            "url": 'https://api.apilayer.com/fixer/latest?apikey=1eNLKp3wLEFR1LQiIKxbFfk5EWFSV2Zf'
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid && state === "SUCCESS") {
                //for test
                console.log('response.getReturnValue()=> ' + JSON.stringify(response.getReturnValue()));

                component.set("v.response", response.getReturnValue());
                var getAllRates = component.get("v.response")['rates'];
                //for test
                console.log('getAllRates=>  ' + JSON.stringify(getAllRates));

                var CurrencyList = [];
                for (var key in getAllRates) {
                    CurrencyList.push(key + '=' + getAllRates[key]); //GHN=70
                }
                component.set("v.ListOfCurrency", CurrencyList);
                console.log('CurrencyList=> ' + CurrencyList);
            }
        });
        $A.enqueueAction(action);
    },
})