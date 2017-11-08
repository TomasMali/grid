import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];

    constructor() {
        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {
                headerName: "Listino riferimento",
                marryChildren: true,
                children: [
                    {headerName: "Codice", field: "cod", width: 90, filter: 'number'},
                    {headerName: "Descrizione", field: "des", width: 140, filter: 'text', filterParams:{
                    filterOptions:['contains']
                    }},
                    {headerName: "R", field: "r", width: 40},
                    {headerName: "Range taglie", field: "rangeTG", width: 120}
                ]
            },
            {
                headerName: "Anno Corrente",
                groupId: "AnnoCorrGroup",
                children: [
                    {
                        headerName: "Parametri",
                        marryChildren: true,
                        children: [
                        {headerName: "", field: "empty", width:90, columnGroupShow: 'closed', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Sconto Fil. Netto", field: "sconFilNetto", width:150, columnGroupShow: 'open', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Duties", field: "duties", width:90, columnGroupShow: 'open', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Trasporti", field: "trasporti", width:90, columnGroupShow: 'open', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Provv.", field: "provv", width:90, columnGroupShow: 'open', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Mark-up", field: "markup", width:90, columnGroupShow: 'open', editable: true, newValueHandler: numberNewValueHandler},
                        {headerName: "Sconto Dealer", field: "scontoDealer", width:130, columnGroupShow: 'open',editable: true, newValueHandler: numberNewValueHandler}
                        ]				
                    },
                    {
                        headerName: "Mark-up",
                        children: [
                        {headerName: "+ Sconto Dealer", field: "MUscontodealer", width:140,
                        valueGetter: "data.sconFilNetto + data.duties + data.trasporti + data.provv + data.markup+ data.scontoDealer",
                        volatile: true,
                        cellClassRules: {
                                'rag-red': 'x>25',
                                'rag-green': 'x<20',
                                'rag-amber': 'x>=20 && x<=25'
                                }
                        }
                        ]
                    },
                    {
                        headerName: "COSTO",
                        marryChildren: true,
                        children: [
                        {headerName: "Unita produttiva", field: "uProd", width:150},
                        {headerName: "Landed Giaevra", field: "LGiaevra", width:160},
                        {headerName: "FOB", field: "fob", width:90}
                        ]				
                    },
                    {
                        headerName: "",
                        marryChildren: true,
                        children: [
                        {headerName: "", field: "campi", width:40, columnGroupShow: 'closed'},
                        {headerName: "RETAIL", field: "ratail", width:100, columnGroupShow: 'open'},
                        {headerName: "WHLS GROSS", field: "whlsGross", width:130,columnGroupShow: 'open'},
                        {headerName: "WHLS NET", field: "whlsNet", width:120,columnGroupShow: 'open'},
                        {headerName: "FILIALE CALCOLATO", field: "FilialeCalc", width:170,columnGroupShow: 'open'},
                        {headerName: "FILIALE DEFINITIVO", field: "FilialeDef", width:170,columnGroupShow: 'open'},
                        {headerName: "Forecast / Ordinato", field: "ForOrd", width:160,columnGroupShow: 'open'},
                        {headerName: "Delta Last Year", field: "deltaLastYear", width:140,columnGroupShow: 'open'}
                        ]				
                    },
                    {
                        headerName: "MARGINE NETTO",
                        marryChildren: true,
                        children: [
                        {headerName: "INDUSTRIALE", field: "industriale", width:150},
                        {headerName: "FILIALE", field: "filiale", width:120},
                        {headerName: "CONSO", field: "conso", width:120}
                        ]				
                    }
                ]
            }
        ];

        
        this.rowData = [
            {cod: '000', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '005', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '045', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '145', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 3, duties: 5, trasporti:2, provv:4, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '245', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '345', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 5, duties: 10, trasporti:7, provv:8, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '445', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '545', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '645', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '745', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '845', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '945', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
            {cod: '1045', des: 'Desc articolo', r: 1, rangeTG: 1, sconFilNetto: 1, duties: 1, trasporti:1, provv:1, markup:1, scontoDealer:5, MUscontodealer:4, uProd:5, LGiaevra:4, fob:8, ratail:45, whlsGross:12, whlsNet:74, FilialeCalc:87, FilialeDef:878, ForOrd:87, deltaLastYear:85, industriale:45, filiale:12, conso:65},
        ];
        
         function numberNewValueHandler(params) {
            var valueAsNumber = parseInt(params.newValue);
            if (isNaN(valueAsNumber)) {
                window.alert("Valore non valido. Inserire un numero!");
            } else {
                params.data[params.colDef.field] = valueAsNumber;
            }
        }
    
      
        


    }





    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

