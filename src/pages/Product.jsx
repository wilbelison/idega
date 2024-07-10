import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const catalog = [
  {
    id: 0,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_IPA_355ml_a113107819.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_IPA_355ml_a113107819.png",
    title: "Cerveja Eisenbahn American IPA Long Neck 355ml",
    slug: "cerveja-eisenbahn-american-ipa-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.99,
  },
  {
    id: 1,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_Pilsen_355ml_8f1c99f728.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_Pilsen_355ml_8f1c99f728.png",
    title: "Eisenbahn Pilsen Long Neck 355ml",
    slug: "eisenbahn-pilsen-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 3.99,
  },
  {
    id: 2,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_Pale_Ale_355ml_0454541023.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_Pale_Ale_355ml_0454541023.png",
    title: "Eisenbahn Pale Ale Long Neck 355ml",
    slug: "eisenbahn-pale-ale-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.99,
  },
  {
    id: 3,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_IPA_355ml_63740f1794.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_IPA_355ml_63740f1794.png",
    title: "Eisenbahn Session IPA Long Neck 355ml",
    slug: "eisenbahn-session-ipa-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.99,
  },
  {
    id: 4,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_Unfiltered_355ml_68f3f8f4d6.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_Unfiltered_355ml_68f3f8f4d6.png",
    title: "Eisenbahn Unfiltered Long Neck 355ml",
    slug: "eisenbahn-unfiltered-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.99,
  },
  {
    id: 5,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_LN_Weizenbier_355ml_6330cadf72.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_Weizenbier_355ml_6330cadf72.png",
    title: "Eisenbahn Weizenbier Long Neck 355ml",
    slug: "eisenbahn-weizenbier-long-neck-355ml",
    details: "Long Neck 355ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.99,
  },
  {
    id: 6,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_IPA_350ml_4e611ac8bc.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_LN_Weizenbier_355ml_6330cadf72.png",
    title: "Eisenbahn American IPA Lata 350ml",
    slug: "eisenbahn-american-ipa-lata-350ml",
    details: "Lata 350ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 3.99,
  },
  {
    id: 7,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_Pilsen_350ml_3bf2090e51.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_Pilsen_350ml_3bf2090e51.png",
    title: "Eisenbahn Pilsen Lata 350ml",
    slug: "Eisenbahn Pilsen Lata 350ml",
    details: "Lata 350ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 3.49,
  },
  {
    id: 8,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_Pale_Ale_350ml_17dddeb715.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_Pale_Ale_350ml_17dddeb715.png",
    title: "Eisenbahn Pale Ale Lata 350ml",
    slug: "eisenbahn-pale-ale-lata-350ml",
    details: "Lata 350ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.49,
  },
  {
    id: 9,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_Session_IPA_350ml_9f59e40bac.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_Session_IPA_350ml_9f59e40bac.png",
    title: "Eisenbahn Session IPA Lata 350ml",
    slug: "eisenbahn-session-ipa-lata-350ml",
    details: "Lata 350ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.49,
  },
  {
    id: 10,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Lata_Unfiltred_350_ml_55a9c838b6.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Lata_Unfiltred_350_ml_55a9c838b6.png",
    title: "Eisenbahn Unfiltered Lata 350ml",
    slug: "eisenbahn-unfiltered-lata-350ml",
    details: "Lata 350ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 4.49,
  },
  {
    id: 11,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_Pilsen_473ml_d31bacb010.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_Pilsen_473ml_d31bacb010.png",
    title: "Eisenbahn Pilsen Lata 473ml",
    slug: "eisenbahn-pilsen-lata-473ml",
    details: "Latão 473ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 5.49,
  },
  {
    id: 12,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_Unfiltered_473ml_8c8eafb82b_a94d243dd6.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_Unfiltered_473ml_8c8eafb82b_a94d243dd6.png",
    title: "Eisenbahn Unfiltered Lata 473ml",
    slug: "eisenbahn-unfiltered-lata-473ml",
    details: "Latão 473ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 5.49,
  },
  {
    id: 13,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Garrafa_Pilsen_600ml_cfa0581cbb.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Garrafa_Pilsen_600ml_cfa0581cbb.png",
    title: "Eisenbahn Pilsen Garrafa 600ml",
    slug: "eisenbahn-pilsen-garrafa-600ml",
    details: "Garrafa 600ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 11.99,
  },
  {
    id: 14,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_unfiltered_Garrafa_600ml_8756fb4f63.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/unfiltered_Garrafa_600ml_8756fb4f63.png",
    title: "Eisenbahn Unfiltered Garrafa 600ml",
    slug: "eisenbahn-unfiltered-garrafa-600ml",
    details: "Garrafa 600ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 11.99,
  },
  {
    id: 15,
    stock: 99,
    category: 0,
    thumbnail:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/thumbnail_Eisenbahn_Lata_269ml_f3d6afa2c1.png",
    image:
      "https://hnk-banco-de-imagens-2022-production.s3.amazonaws.com/Eisenbahn_Lata_269ml_f3d6afa2c1.png",
    title: "Eisenbahn Pilsen Lata 269ml",
    slug: "eisenbahn-pilsen-lata-269ml",
    details: "Lata 269ml",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.",
    price: 2.99,
  },
];

const Product = () => {
  const { productSlug } = useParams();

  const product = catalog.filter((product) => product.slug === productSlug)[0];

  return (
    <>
      <nav className="Breadcrumb">
        <ul>
          <li className="breadcrumb-link"><Link to="/">Home</Link></li>
          <li className="breadcrumb-divider">/</li>
          <li className="breadcrumb-link"><Link to="/category/cervejas">Cervejas</Link></li>
        </ul>
      </nav>
      <main className="Product">
        <div class="product-thumbnail">
          <img src={product.image} alt="" />
          <div class="thumbnail-overlay"></div>
        </div>
        <div class="product-infos">
          <h1 className="product-title">{product.title}</h1>
          <span className="product-details">{product.details}</span>
          <span className="product-description">{product.description}</span>
          <span className="product-price">{product.price}</span>
          <button className="product-add">Adicionar</button>
        </div>
      </main>
    </>
  );
};

export default Product;
