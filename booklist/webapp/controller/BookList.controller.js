sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("org.ubb.books.controller.BookList", {
       
        onDeleteBook(oEvent){
            const aSelCont = this.byId("idBooksTable").getSelectedContexts();
            const sPathToBook = aSelCont[0].getPath(); 
            console.log(sPathToBook)
            
            this.getView().getModel().remove(sPathToBook);
        },

        onCreateBook(oEvent){
            const isbn = parseInt(this.getView().byId("isbn").getValue()) || 0;
            const author = this.getView().byId("author").getValue();
            const title = this.getView().byId("title").getValue();
            const language = this.getView().byId("language").getValue();
            const total = parseInt(this.getView().byId("total").getValue()) || 0;
            const available = parseInt(this.getView().byId("available").getValue()) || 0;

            var book = {
                "ISBN":isbn,
                "Author":author,
                "Title":title,
                "Language":language,
                "total_nr":total,
                "available_nr":available,
            }

            this.getView().getModel().create("/Books",book, {
				success: function (odata, Response) {

				},
				error: function (cc, vv) {

                }
            });
        },

        onUpdateBook(oEvent){
            const isbn = parseInt(this.getView().byId("isbn").getValue()) || 0;
            const author = this.getView().byId("author").getValue();
            const title = this.getView().byId("title").getValue();
            const language = this.getView().byId("language").getValue();
            const total = parseInt(this.getView().byId("total").getValue()) || 0;
            const available = parseInt(this.getView().byId("available").getValue()) || 0;
           
            var book = {
                "ISBN": isbn,
                "Author":author,
                "Title":title,
                "Language":language,
                "total_nr":total,
                "available_nr":available,
            }

            console.log(isbn)
            this.getView().getModel().update("/Books("+ isbn +")",book);
        }
 });
});
