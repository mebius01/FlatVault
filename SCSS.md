## Вложенность

```scss
.nav {
  grid-area: nav;
  background-color: $nav-color;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    li {
      a {
        display: block;
        text-decoration: none;
        background-color: rgb(55, 77, 91);
        padding: 20px;
      }
    }
  }
}
```

Переменные
Амперсанд
%-name | extend
