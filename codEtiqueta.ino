#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <LiquidCrystal_I2C.h> 
LiquidCrystal_I2C lcd(0x27,20,4);

ESP8266WebServer server(80);
 
const char* ssid = "XANDE CARDOSO";
const char* password =  "18070829";

//const char* ssid = "SENAC";
//const char* password = "x1y2z3@snc";

String hash;

// imprimir ip no lcd por 10s
// adicionar rota para mostrar as configurações
 
void setup() {
 
    Serial.begin(115200);
    WiFi.begin(ssid, password);  //Connect to the WiFi network
     
    lcd.init();
    lcd.setBacklight(HIGH);
    lcd.setCursor(8,0);
    lcd.print("LUTY");
    lcd.setCursor(0,1);
 
    while (WiFi.status() != WL_CONNECTED) {  //Wait for connection
 
        delay(500);
        Serial.println("Waiting to connect...");
        lcd.println("Conectando...");
        delay(2000);
        lcd.clear();
        lcd.setCursor(8,0);
        lcd.print("LUTY"); 
        lcd.setCursor(0,1);     
 
    }
 
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());  //Print the local IP
    lcd.clear();
    lcd.setCursor(8,0);
    lcd.print("LUTY");
    lcd.setCursor(0,1);
    lcd.print(WiFi.localIP());
    //delay(10000);
    //lcd.clear();

    server.on("/body", handleBody); //Associate the handler function to the path
    server.on("/produto", handleProduto); //Associate the handler function to the path
    server.on("/protect", handleProtect); //Associate the handler function to the path

    server.begin(); //Start the server
    Serial.println("Server listening");
 
}
 
void loop() {
 
    server.handleClient(); //Handling of incoming requests
 
}

void handleProduto() { //Handler for the body path
 
      if (server.hasArg("plain")== false){ //Check if body received
 
            server.send(200, "text/plain", "Body not received");
            return;
 
      }
 
      String message = server.arg("plain"); 
      String nome;
      String preco;
      String codigoEan;
      String token;
      int index = 0;

      for (int i = 0; i < message.length(); i++)
      {
        if (message.charAt(i) == ',')
          index++;
        else
        {
          if (index == 0)
            nome += message.charAt(i);
          else if (index == 1)
            preco += message.charAt(i);
          else if (index == 2)  
            codigoEan += message.charAt(i);
          else if (index == 3)
            token += message.charAt(i);
        }

      }

      Serial.println(nome);
      Serial.println(preco);
      Serial.println(codigoEan);
      Serial.println(token);
      Serial.println(hash);


      /*if(token.equals(hash)){
        Serial.println("Iguais");
        lcd.clear();  
        lcd.setCursor(0,0);
        lcd.print(nome);
        lcd.setCursor(0,1);
        lcd.print(preco);
      }else{
        Serial.println("Diferente");
        server.send(200, "text/plain", "Não foi possivel alterar o preço na etiqueta pos o hash está diferente..");
      }*/
       
        lcd.clear();  
        lcd.setCursor(8,0);
        lcd.print("LUTY");
        lcd.setCursor(0,1);
        lcd.print(nome);
        lcd.setCursor(0,2);
        lcd.print(preco);
        lcd.setCursor(0,3);
        lcd.print(codigoEan);

      server.send(200, "text/plain", "Preço Etiqueta Alterada");
      //Serial.println(message);

     /* lcd.clear();  
        lcd.setCursor(0,0);
        lcd.print(nome);
        lcd.setCursor(0,1);
        lcd.print(preco);
*/

}

void handleProtect() { //Handler for the body path
 
      if (server.hasArg("plain")== false){ //Check if body received
 
            server.send(200, "text/plain", "Body not received");
            return;
 
      }
 
      String message = server.arg("plain"); 
      hash = message;

      lcd.clear();  
      lcd.setCursor(8,0);
      lcd.print("LUTY");
      lcd.setCursor(0,1);
      lcd.print("Etiqueta Ativa");
      lcd.setCursor(0,2);
      lcd.print(WiFi.localIP());

      server.send(200, "text/plain", "Etiqueta cadastrada");
      //Serial.println(message);
      //Serial.println(hash);
    


}

void handleBody() { //Handler for the body path
 
      if (server.hasArg("plain")== false){ //Check if body received
 
            server.send(200, "text/plain", "Oii");
            return;
 
      }
 
      //String message = server.arg("plain"); 
     // hash = "asdasdsada";
     Serial.println("toaqui");
      lcd.clear();  
      lcd.setCursor(8,0);
      lcd.print("LUTY");
      lcd.setCursor(0,1);  
      lcd.print("Etiqueta Desativada");
      lcd.setCursor(0,2);
      lcd.print(WiFi.localIP());
      Serial.println("eaqui");

      server.send(200, "text/plain", "desativada");
     // Serial.println(message);
      


}