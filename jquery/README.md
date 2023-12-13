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

## Modificando o conteúdo e características dos elementos

Para modificar o conteúdo e características dos elementos do HTML é básicamente utilizar os mesmos métodos que eu citei a cima, sendo eles **val()**, **attr()**, **text()**, **html()**, só que dessa vez par alterar o conteúdo basta passar oque você quiser dentro dos argumentos desses métodos, vamos para exemplos:

``` javascript
console.log($("h1").text('Alou sou eu manel gomi!'))
console.log($("h1").html('Alou sou eu manel gomi!'))

// esses dois parece que fazem a mesma coisa mas é um pouquinho diferente, no primeiro eu estou literalmente alterando somente o texto da tag H1, já no segundo eu estou alterando o HTML de fato porém nesse exemplo o resultado vai ser o mesmo, o titulo vai ser alterado para 'Alou sou eu manel gomi!'

console.log($("#lista1").html("listinha do canetinha!"))
console.log($("#lista1").text("listinha do canetinha!"))

// aqui básicamente acontece a mesma coisa que eu citei a cima só tem uma pequena diferença, nesse caso eu estou alterando o conteudo de uma <ul></ul> e quando se faz isso simplesmente quase todos os <li></li> some e só se prevalece uma que foi a que você alterou.

console.log($("#lista1").html("<li>Item teste</li>"))

// um caso um pouco diferente, acontece a mesma ação que eu citei a cima porém é possivel dessa vez você mesmo criar tags através do metodo html, isso me lembra bastante o innerHtml do Javascript.

console.log($(".item2").html("teste classe"))
console.log($("#lista1").find(".item2").html("teste classe com find"))

// é possivel alterar algo atraves de classes também se você quiser modificar algo mais especifico

console.log($("#novo").val("Arroize"))
console.log($("#novo").attr("name", "Manel gomi"))

// aqui não tem muita novidade também, aqui eu estou alterando o value do input text para Arroize e também estou alterando o name do input e atribuindo um novo que é Manel gomi.

```
## Selecionando elementos por atributo

Assunto bem simples de entender, aqui só vai facilitar tua vida, de vez você criar várias classes sem necessidades para vários itens de sua lista você pode usar simplesmentes atributos setados em elemento html, vamos para alguns exemplos.

``` html
<li key=1 class="item" name="Item">item 1</li>
```

nos exemplos anteriores eu estava selecionando um elemento por uma classe ou por um id, aqui eu vou selecionar por um atributo que eu criei nesse elemento HTML acima, e nesse caso o atributo é key, eu nomear de qualquer maneira mas eu optei por nomear como key.

``` javascript
//sendo assim para podermos manipular esse elemento basta fazer isso daqui.

console.log($("[key = 2 ]").remove())
```

## Inserindo elementos com Jquery

aqui vou falar algumas coisinhas sobre como adicionar um elemento usando Jquery, eu vou citar os seguintes métodos, append, prepend, after, before.

- append: O append ele adiciona algo, e se tiver alguma coisa ele adiciona e junta com essa "coisa", só que ele adiciona no fim. <br> 
por exemplo: numa lista tem 4 elementos eu quero adicionar mais um elemento, ele vai adicionar e juntar com os outros 4 elementos já existentes porém vai ser adiciona no fim.

- prepend: O prepend faz o inverso, ele adiciona e junta só que no inicio. <br>
Por exemplo: se existe uma lista com 4 elementos e eu quero adicionar mais um elemento, ele vai ser adicionado porém no inicio.

- after: o after parece com o append mas só parece mesmo, ele realmente adiciona um elemento porém ele adicionar o elemento **depois** desse elemento, como assim?<br>

```html
 <!-- com o before o elemento é adicionado aqui oh-->
    <ul id="lista1">
        <!-- com o prepend ele é adicionado aqui -->
        <li key=1 class="item" name="Item">item 1</li>
        <li key=2 class="item" name="Arroz">item 2</li>
        <li key=3 class="item" name="Item">item 3</li>
        <li key=4 class="item" name="Item">item 4</li>
        <li key=5 class="item" name="Item">item 5</li>
        <li key=6 class="item" name="Item">item 6</li>
        <!-- com o append ele é adicionado aqui -->
    </ul>
    <!-- com o after ele é adicionado aqui oh -->
```

Bom eu imagino que você já entendeu então não vou explicar oque o before faz tá na cara né filho. <br>
Aqui embaixo eu vou mostrar alguns exemplos de usos desses metodos.
``` javascript
let lista1 = $("#lista1") //guardei oque eu vou selecionar nessa variavel aqui.

lista1.after("<li>Teste da silva Junior</li>")
lista1.before("<li>Teste da silva Junior</li>")
lista1.append("<li>Teste da silva Junior</li>")
lista1.prepend("<li>Teste da silva Junior</li>")
```



