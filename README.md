# `Hora MSG`
O **Hora MSG** é um script em JAVASCRIPT que foi criado para ajudar aqueles que desejam colocar uma mensagem de acordo com o horário em que o visitante acessar sua página.

Para utilizá-lo você precisará inserir os seguintes códigos no HTML da sua página:

```html
<!-- Scripts devem ser colocados acima do </body> -->
<script src="./hora-msg.min.js"></script>
<script>
  new horaMSG(); // new horaMSG('.hora-msg');
</script>
```

Depois que inserir os códigos acima, crie um ou mais elementos com a classe " **.hora-msg** " como mostrado abaixo:

```html
<span class="hora-msg">Bem-vindo</span> visitante !
```

## Customizando o script

Você também pode customizar o script usando os seguintes métodos:

```html
<script>
var container = '.hora-msg'; // Class ou ID onde o script vai escrever o texto
new horaMSG( container, {
	Madrugada : 'Boa Madrugada', // Mensagem exibida de 00:00 até ás 04:59
	Dia       : 'Bom dia',       // Mensagem exibida de 05:00 até ás 11:59
	Tarde     : 'Boa tarde',     // Mensagem exibida de 12:00 até ás 17:59
	Noite     : 'Boa noite'     // Mensagem exibida de 18:00 até ás 23:59
});
</script>
```
