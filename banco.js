var Banco = { 
    conta: "8654583-98",
    saldo: 2000,
    tipo_de_conta: "Corrente", 
    agencia: 344,
    buscar_saldo: function(){
        return Banco.saldo;
    },
    deposito: function(valor){
        Banco.saldo += valor;
    },
    saque: function(valor){
        Banco.saldo -= valor;
    },
    numero_da_conta: function() {
     return Banco.agencia;
    }
    }