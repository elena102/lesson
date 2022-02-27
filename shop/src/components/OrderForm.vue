<template>
  <div class="form_box">
    <form class="shoping_form" action="#" method="POST">
      <p class="shoping_form_txt">SHIPPING ADRESS</p>
      <input
        class="shoping_input"
        type="text"
        name="country"
        value=""
        placeholder="Bangladesh"
        required
        pattern="\S+[А-ЯA-Z]"
      /><br />
      <input
        class="shoping_input"
        type="text"
        name="state"
        value=""
        placeholder="State"
        required
        pattern="\S+[А-ЯA-Z]"
      /><br />
      <input
        class="shoping_input"
        type="text"
        name="postcode"
        value=""
        placeholder="Postcode / Zip"
        required
      /><br />
      <input class="shoping_button" type="submit" value="GET A QUOTE" />
    </form>
    <div class="shoping_total">
      <div class="shoping_total_txt">
        <p class="total_txt_sml">
          SUB TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $900
        </p>
        <p class="total_txt_big">
          GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>$900</span>
        </p>
      </div>
      <div class="total_line"></div>
      <div class="shoping_total_button">
        <a class="shoping_total_lnk" href="#">
          <p class="shoping_total_lnk_txt">PROCEED TO CHECKOUT</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
};
</script>

<style>
</style>