# Travel-shop
여행 상품 등록 및 결제 사이트

### Development environment
- React
- Redux
- React-Redux
- React hooks
- Ant design
- MonogoDB + heroku
- <a href="https://developer.paypal.com/home/">PayPal</a>

### Features
- Register travel packages
- Select travel packages and add a shopping cart.
- Pay for of travel packages





---


### 2020-03-08

npm install시 발생한 error 해결

1. `$ rm -rf package-lock.json node_modules` <-- you need both
2. `$ npm install`



#### Create Upload Product Page

1. Create an empty Upload PAge
2. Create Upload Page Route
3. Create Upload Page Header Tab
4. Make all the Form except for Drop-Zone -> This time, we will make component for file upload
5. Make onChange Function for all the inputs



#### File Upload Component

1. Create File Upload File Inside Utils Folder
2. Install Drop-zone dependency -> npm install react-dropzone --save
3. Make Template for File Upload Component
4. Make onDrop Function
5. Make onDelete Function(클릭 시 이미지 삭제)



### 2020-03-09



#### Complete Upload Product Page

1. Make Product Model
2. bring Upload File Component
3. Update File Datas from upload file component to parent component
4. Make onSubmit Function
5. Submit all info to Server
6. Save them in MonogoDB



#### Display Product Lists in the landing page

1. Make Empty Landing Page

2. Fetch All Product Datas From MongoDB to Client

3. Create Landing Page Template

4. Display Product Lists in the Landing Page -> Use map() methods

   

#### Load More Feature

1. Make Load More Button

2. Make onClick Function for Load More Button

3. Make state for SKIP $ LIMIT

   SKIP

   the position from where you start fetching the product datas

   start will be 0, next one will be if Limit is 6 2rd Skip = 0 _ 6

   Mongodb Method, 

   LIMIT

   how many product datas will you fetch data to the maximum whenever you click Load More Button

4. Change API for fetching Products Data to use Load more feature

5. Add the datas we brought



### 2020-03-09

#### CheckBox Filter By Continents(1)

1. Make CheckBox Lists Datas
2. Make a template for checkbox
3. Make onChange Fucntion
4. Update Checked State into Parent Component



### CheckBox Filter By Continents(1)

1. Make handleFilter Function
2. Trigger getProducts Function with Filter Condition
3. Change getProduct API for Filter



### 2020-03-10

CheckBox Filter By Continents(2)

1. Make Radio Lists Datas
2. Make a template for radiobox
3. Make onChange Function
4. Update Checked State into Parent Component



### 2020-03-11

CheckBox Filter By Continents(3)

1. Make handleFilter Function
2. Make handlePrice function for handlefilter
3. Change getProduct API for Filter



### 2020-03-12

#### Search Feature(1)

1. Make SearchFeature Component
2. Make a template for search feature
3. Make onChange Function
4. update search Data into parent Component



### 2020-03-13

#### Search Feature(2)

1. Trigger getProduct Function with search condition
2. Change getProduct API for search feature
3. add something for product model to be searchable



### 2020-03-13

#### Product Detail Page

1. Make empty product detail page
2. Make a route for product detail page
3. Fetch product information from DB
4. Makea template for product detail page 
   1. productInfo Component
   2. productImage Component
   3. npm install react-image-gallery --save





### 2020-03-15,16

#### Add to Cart Feature

1. Send http Request whit redux 
2. Make AddToCart API



inside the cart the product i will add to cart Alread exist (Duplicated) 

-> Increment Quantity for the product by1

If not -> Quantity will be 1

3. Store this information inside Redux User State



### 2020-03-17,18,19

#### Add to Cart Feature(1)

1. Create an empty cart page
2. Create a route for cart page
3. Create a header tab for cart page
4. Fetch the products stored in Cart from the DB



#### Add to Cart Feature(2)

1. Make template for cart page -> UserCardBlock Component
2. populate fetched Data in browser
3. Calculate Total amount of Products Price inside the Cart-> item price x quantity
4. Make Remove From Cart Feature

https://catnap-jo.tistory.com/19



### 2020-03-20,24

### Paypal

1. sandbox paypal sign up
2. create test id for paypal
3. make transactionSuccess function
4. Make a Paypal Button -> npm install react-paypal-express-checkout--save

-> 1. Empty the cart

2. Save Payment Information
   1. Payment collection (detail)
   2. user collection 

### 2020-03-25

### History Page

1. Make an empty history page
2. Make a route for hisotry page
3. Fetch the History datas
4. Populate datas in the browser

