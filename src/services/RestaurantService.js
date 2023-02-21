export class RestaurantService{
  static  restaurantData  = null;
  static async setRestaurantData(){
    const restaurantDatafromAPI = await fetch('https://run.mocky.io/v3/8752805c-5fcf-4f55-aadc-6bcf8a8e3ad1');
    RestaurantService.restaurantData= await restaurantDatafromAPI.json();
  }
static async getRestaurantData()
    {
        if(!RestaurantService.restaurantData){
            await RestaurantService.setRestaurantData();

}
return RestaurantService.restaurantData;

}
}
