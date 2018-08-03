(function (DOM) {
    'use strict';
    var app = (function appController() {
        return {
            init: function(){
                this.companyInfo();
                this.initEvents();
            },
            initEvents: function() {
                DOM('.form-register').on('submit', this.handleSubmit);
                if (DOM('.delete-car').get()) {
                    DOM('.delete-car').on('click', this.deleteCar);
                }
            },
            handleSubmit: function handleSubmit(e) {
                e.preventDefault();
                var tableCar = DOM('.table-car').get();
                tableCar.appendChild(app.createNewCar());
            },
            createNewCar: function createNewCar() {
                var fragment = document.createDocumentFragment();
                var tr = document.createElement('tr');
                var tdImage = document.createElement('td');
                var image = document.createElement('img');
                var tdBrand = document.createElement('td');
                var tdYear = document.createElement('td');
                var tdPlate = document.createElement('td');
                var tdColor = document.createElement('td');
                var tdDelete = document.createElement('td');
                var deleteBt = document.createElement('button');

                image.src = DOM('.InputImg').get().value;
                tdImage.appendChild(image);

                tdBrand.textContent = DOM('.InputMarca').get().value;
                tdYear.textContent = DOM('.InputAno').get().value;
                tdPlate.textContent = DOM('.InputPlaca').get().value;
                tdColor.textContent = DOM('.InputCor').get().value;

                deleteBt.textContent = 'Excluir';
                deleteBt.classList.add('btn', 'btn-danger', 'delete-car');
                tdDelete.appendChild(deleteBt);

                tr.appendChild(tdImage);
                tr.appendChild(tdBrand);
                tr.appendChild(tdYear);
                tr.appendChild(tdPlate);
                tr.appendChild(tdColor);
                tr.appendChild(tdDelete);

                document.querySelector(".form-register").reset();

                return fragment.appendChild(tr);
            },
            deleteCar: function deleteCar(elem) {
                elem.parentNode.remove();
            },
            companyInfo: function() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },
            getCompanyInfo: function() {
                if(this.readyState === 4 && this.status === 200) {
                    var data = JSON.parse(this.responseText)
                    var companyName = DOM('.company-name');
                    var companyPhone = DOM('.company-phone');

                    companyName.get().textContent = data.name;
                    companyPhone.get().textContent = data.phone;

                }
                return;
            }
        };
    })();
    
    app.init();
})(window.DOM);