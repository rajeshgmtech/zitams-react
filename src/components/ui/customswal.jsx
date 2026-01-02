import Swal from "sweetalert2";


const CustomSwal = Swal.mixin({
  // Replace all default icons with your logo
 /*  iconHtml: '<img src="/images/zimtams-logo-old.png" class="w-50 h-16 mx-auto object-contain" />', */

  // Remove default icon background
  customClass: {
    icon: "swal-no-default-icon",

    // Tailwind button classes
    confirmButton: "tw-confirm-button",
    cancelButton: "tw-cancel-button",
  },

  buttonsStyling: false, // ← Required for Tailwind buttons
});

export default CustomSwal;
