function clicou(){
    window.location.href = "./thankyou-page/thanks.html";
}

function cancel(){
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'successfully canceled'
        
    })

    setTimeout(function () { window.location.href = "./thankyou-page/thanks.html"; }, 4000); 
}




