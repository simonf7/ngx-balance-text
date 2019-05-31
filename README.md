# NgxBalanceText

A simple Angular `directive` to integrate the `BalanceText` alternative text wrapping algorithm.

https://github.com/adobe-webplatform/balance-text

## Example

A simple example can be found under `src/app` directory of this repository.

## Installation

`npm i ngx-balance-text`

## Usage

1. Register the `NgxBalanceTextModule` directive in your app module.
   > `import { NgxBalanceTextModule } from 'ngx-balance-text'`

    For example -

    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { NgxBalanceTextModule } from 'ngx-balance-text';

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, NgxBalanceTextModule],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

2. Use the directive in the required HTML elements.

    ```html
    <p ngxBalanceText>
      This is some text that will be split evenly between lines.
    </p>
    ```

## Build NgxBalanceText

Run `ng build NgxBalanceText` to build the library. The build artifacts will be stored in the
`dist/ngx-balance-text` directory.
