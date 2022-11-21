public with sharing class HttpCallOutURL {
    @AuraEnabled
    public static Map<String,Object> getCalloutResponseData(String url) {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(url);
        HttpResponse response = h.send(req);
        // System.debug('Response-->:'+response.getBody());
        
        //as the response body is String we want to deserialize it to JSON Obj
        Map<String,Object> result =  (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
        // System.debug('JSON -->:' +result ); //to get Object property use Obj.get('propertyName')
        return result;
    }
}