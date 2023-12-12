# Jquery

## Encadeamento (chaning)

#### Importando o jquery em meu documento html:
Para importar o jquery em meu documento html basta eu adicionar esse script em meu head que contém a URL do Jquery.

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```
O uso do cifrão em Jquery tem a mesma funcionalidade de usar um **Document.getElementById()** do proprio Javascript

``` javascript
let jq = $('#lista1')
```
É possivel o uso de animações no Jquery como por exemplo o **slideUp** e o **SlideDown**.

``` javascript
let jq = $('#lista1').slideUp(2000).slideDown(1000)

// esses valores nos argumentos das animações representa o tempo de duração da animação respectiva em milisegundos.
```


## Lendo o conteúdo de um elemento com Jquery

Existe várias maneiras de ler um documento html através do Jquery, dentre elas existe os seguintes métodos **html()**, **text()**, **val()**, **attr()**.


``` javascript
console.log($("h1").html())
// com o metodo html() eu consigo extrair literalmente o html do que eu estou selecionando. 

console.log($("h1").text())
// com o metodo text() eu apenas consigo extrair o texto do que eu estou selecionando nesse caso a tag h1.
```

Agora vamos ver formas de ler o valor e o atributo de algum input.

``` javascript
console.log($("#novo").val())
// com o metodo val eu consigo extrair o conteudo value e ler.

console.log($("#novo").attr("name"))
//com o metodo attr(), eu consigo extrarir e ler o conteudo que há dentro do atribute name.
```




