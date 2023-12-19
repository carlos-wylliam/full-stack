# Bootstrap
Olá aqui é onde eu vou documentar todo meu aprendizado sobre Bootstrap.

## Adicionando o Bootstrap no projeto
Existe várias maneiras de adicionar o bootstrap ao projeto, pode ser baixando o proprio arquivo do bootstrap zipado e por no projeto (eu desrecomendo), pode ser usando um gerênciador de bibliotecas no caso a da NPM e pode ser simplesmente adicionando o link que o proprio bootstrap dispõe no caso é esse link daqui.

<br>

``` javascript
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

## Cores padrão no Bootstrap

Aqui eu vou explicar básicamente como que se usa o bootstrap e as cores padrão dele tanto de texto como de background. Para usar as funcionalidades do bootstrap é através de classes abaixo eu vou por uma lista com as cores padrão para facilitar o entendimento.

```html
<p class="text-primary"> cor primária </p>
<p class="text-secondary"> cor secundária </p>
<p class="text-success"> cor verde indicado sucesso de algo </p>
<p class="text-danger"> cor vermelha indicado perigo de algo </p>
<p class="text-warning"> cor amarela indicando cuidado </p>
<p class="text-info"> cor azul piscina </p>
<p class="text-light"> cor clara </p>
<p class="text-dark"> cor escuridão </p>
<p class="text-body"> cor primária </p>
<p class="text-muted"> cor primária </p>

<p class="text-primary bg-white"> cor primária </p>
<p class="text-primary bg-dark"> cor primária </p>
```

## Costumizando o Bootstrap

Aqui vou básicamente explicar como que eu posso vir a personalizar algo o bootstrap nesse caso eu quero personalizar a cor de alguma classe nesse exemplo eu vou querer costumizar a cor do **text-primary**.

Primeiramente eu tenho que ir inspecionar o código e buscar algo parecido com isso daqui.

```css

/* no caso eu tenho que buscar algo parecido com isso daqui no inspecionar código :root, [data-bs-theme=light], dentro do bloco de código css eu personalizei com a cor que eu queria nesse caso um laranja */
:root, [data-bs-theme=light] {
    --bs-primary-rgb: 255, 110, 253;
}
```

## Breakpoints

Como funciona o uso de breakpoints com o bootstrap, primeiro vou por a lista de breakpoints existentes dentro do bootstrap.
```css
         sm: 576px
         md: 768px
         lg: 992px
         xl: 1200px
         xxl: 1400px 
```

Agora vou explicar como funciona para aplicar um breakpoint sob alguma propriedade.
```css 
{propriedade}-{breakpoint}-{tamanho}
```
propiedades pode ser muitas coisas, propriedades pode ser container, margin e padding por exemplo, abaixo vou por o caso de uso desses breakpoints

```html
    <div class = "container-lg"></div>
    <!-- container = propriedade, lg = breakpoint -->
    <div class = "m-lg-5"></div>
    <!-- m = propriedade, lg = breakpoint, 5 = tamanho -->
```