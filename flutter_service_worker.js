'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "61fad2eabc9fc66204b5d38d9cdeae87",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf6a4cb5b15e279a5fffff4d4662f963",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "615b74901c74f02f27be197f6acbb43f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e62e7a365771b388d8569dddd0cf613c",
".git/logs/refs/heads/main": "08efc2d6e8e2c9e75a5daaa7d2f4daf4",
".git/logs/refs/heads/master": "3d00818ac0ea1d5a3af4b0b6f25a0d09",
".git/logs/refs/remotes/churchDB/master": "b36c3adbb480ee8b97bc1a5b327b98e4",
".git/logs/refs/remotes/origin/main": "50fbed6c8667e066c21d9448017d9fd7",
".git/logs/refs/remotes/origin/master": "59638c78450e4632747aebb5787e887e",
".git/objects/00/818add63ef2dee8d6fd69d7e2c957c8ad54d3b": "8cf8c2def83fb881174e904074577431",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/cdd2d5052a74c6d85cdbc7a0bbd3fa54abdbdc": "24e5a1e352e4d6aedc4ce31449d58040",
".git/objects/06/c782326c75cd44722bda73fff87a91d1e047eb": "8d0cf250fba37ac88d56e754f8789ede",
".git/objects/07/67365b267da49500384c8adea3de92a54006bd": "5f14538bb148298974abd4db1c41216a",
".git/objects/07/7ef4afec72b50e1750f0198e86cd51bb099797": "afc8c17b9d187c363ddd9f8c4f3e2d5c",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/14/5f8f986b850fcf07742af3f836d3c9658c1616": "ee30dcd71ad30b5ad44e40262e92b192",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/89e5c8e8c7dc40117c0b8fd653ca883b5b06dc": "433a922e5e79e0f0b205f9046576a35e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/db48531ef310eac6bb63de9644b9663222666e": "57ee656e086a98d049ab3fe42497f44e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/4f240f523e36a845fa62387241fa078bacb823": "bc531da72a029dfac44bf01ba9f0da0c",
".git/objects/2b/e3a46f7c611b8669df12dedae8d246059396f0": "3105a0af49efc8ef717bdc6d7ed8397a",
".git/objects/30/31d176ad42212f1c8537daa3df9a379ace0a31": "d035c214dc614c1fdb70235a6e0cc431",
".git/objects/31/e4ae75fcf14563f5da4b187972fb2c7ef27051": "e4c6b40e128c67fe143bfe21c5e3341d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/cf6c57617e23d818d1ef226ef2fa4046fda989": "79df7db80ca56fc83e3587bedc14ad82",
".git/objects/36/55c3baa0a1ecf2510eefa1d57a0abf91eb4da9": "c1ea65af89d048f93a3cd49cb761aa2c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/4a0755728bd55f4b1a371dc4f13004cb7e7413": "9e0252d5c13f29097c30eb5c30e45bb3",
".git/objects/3c/68fcff52f6ae35222383e0e174045f386a3981": "5085209c01ab562b444e51c929596c07",
".git/objects/44/ae7cf5f91d1102690fc8b5e7bf12db2309745f": "b0c97ac5892e94ffbe609c618cbd0385",
".git/objects/44/c93247b9453d4fd83be262562ca921a1070397": "4da6509bdc8394bb302fd06803703623",
".git/objects/47/11c58e1ddcd3a28436896eafa1a06c8b01e3b2": "8f3a6cd73559e075c8b12e0d5f439a35",
".git/objects/47/f908463ae2b24c7aa9f37d688061172f3d6b78": "f5dc5c1812d9e8bf2775b78e9676d68f",
".git/objects/48/29030b6f3024584b076a7eaf275c16566c7309": "f81f651d42e7ddc9c64cc1005077fe9d",
".git/objects/48/b8e6dc4a5b42b03a47237031111d059d901757": "f5c8627a0b7df3dda1fb97672204a8b3",
".git/objects/4d/d74e4ee0f2716fcbf4d11211e9358591585799": "a13db303a1abe14249d82bc0484d472c",
".git/objects/4d/eae42b29570be503786ef3eea88871b9809c4f": "76be0f696e68b4ee2b26f9ed7c445342",
".git/objects/4f/51c2324b0af2fb23b56920a3eab10c703974a5": "6c8fd6db93ba3e6c3206cbddcf362d58",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/896734afd6b73bb34bccc25fec8068976f6967": "c799475a0e33213d83af62c9fc9a8e4a",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5d/7571b7534e221a5cdcdc252fab7df36ed10521": "f15ec3afa285df79ff0b9c8fb6d12035",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/65/a1336a1c7efa00b78ec324497ab9c05444100a": "c0ad8cfbefd5250c370215ca5c39866f",
".git/objects/69/2626af2eada9be2b2684dec1a992e212244757": "619b94a5b86c2c688f75a9ab63738cd5",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/6e387df2cfd7e5f80360439638d6eaadbdd53d": "cd4a9d89b3f8f9a54885ad35d53cd8fd",
".git/objects/73/79b8ad9e6ad90fa919ee82c04d5b3893e22b5f": "a1ce55227fa63d880aee79e5bced3654",
".git/objects/82/a352c1f1873839755d388b9854f4bc912e61ca": "fe30561550127fce18b77343f05683a3",
".git/objects/86/42a5d5baa8d4f5ad24958ff22b48c9e3611d3c": "1c2006c6e68a7749e5ad9bacaf12e946",
".git/objects/86/a52944ded5ca5c1747c234a6a4f7d451f72dcf": "0047a07a1fc933cd6704da76551a3e01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a2d1ac22e57d9a30f54798f6c8da20c6695911": "f02625e8c454bc607e821db06f33fbe0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4ab2312364c5e77377266344d2f56a429d8f88": "a561c3335a63ea2829d9988e2d6df0a6",
".git/objects/8b/8cd4e4df7ee75757cf79d863098bc44524fd03": "b7337634a5d56714edab5dcbd5b1094a",
".git/objects/8d/7c725317cba6bb7fa263cea1fc9034085ef351": "5d433cf75ed139da62ab326df35cbe06",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/81b36b0d413c8a3f5884e3ca90abbec0c3286e": "8a0045907742c5a17fa555dd6e22289a",
".git/objects/91/68a9a11aa624adbdce11b7dcac9bc5b4d6ed9d": "19f6b0f28dd4405f442b21364a462a39",
".git/objects/95/e8cccbdb7391112af41459ed4918ef974bf6f7": "84486760e23a82dca83aebefd1388bb8",
".git/objects/98/364525be89a46f842d49d1262ee2b87dff39b2": "04d1a2a6c43c4a986f0e1667cc05f7df",
".git/objects/9e/46b620575c93227d735fef06a62e2c1a8cf2cf": "cb1cad7c58c83e3409e22aa62dceb3cd",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/f2bdad69f790ad0a2bd492d9ec9e6adff33976": "a5b7fb44ff8f0af979cba55ef0f031d6",
".git/objects/a4/42dcb9e424c26660f49d56b9dcf68a1493e2c6": "00472cf777c59acb09e7b6914ab7bdba",
".git/objects/aa/2af9a4876b7162a363f7342c22d14ff308dcfd": "3f7fcd608a9419bfdd5950f879bba7b2",
".git/objects/ad/80c7138dd90653d40335c983f11b1cceb0df3a": "67b57ec950a5e0d78ed2c1efe57a02d2",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/9eec2e488d07ddfdf6a9ce6b89d16ab22e893c": "76ae71253038b8d9cea78e24d2637a35",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/7fdf88cc5e1dbf98eab215c31e425af611dc7c": "99db1ee360f68a3d1533746a5d9e6a79",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/26578149dae44d9ef068efb1dac69e52ce54f2": "e39c32ddcbbf059b82a388553e0ee332",
".git/objects/be/b5600ad0e2f526cecb7f92621b2de798156eb8": "e9c8d24eb55344fad018f4b8e6bb7901",
".git/objects/c1/277194d9d21dd53796edf6c43be879b9daf0dc": "16393f3ee4ed898020680029af72dc33",
".git/objects/c1/3155d60df34f94400b786257d3795e9153d051": "d48063b4df8bf0297cc151f80a82d205",
".git/objects/c1/aa744e8be9d703f162df65328bf0744c684955": "759429ee87027dba9c2e0823673bd5a5",
".git/objects/c3/507c5caa0a8162316e8b1a4eb1fae2e3308131": "5c4a83bc8bd193eae9a59e726f394794",
".git/objects/c7/06c0d63db4273a7a4bef6644d39a95de5f7447": "1abdc4d6efa457bf507adc5a99e50ed4",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/cb/fa46bab46ad5ff53931d1b6791b739e1c1e527": "a69adf89ac0ccb69a9ad2a41beabb2df",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4bc24aefb68f3d610fceef872c96d77da877c0": "4b17240b80ee9151f8b09730a29fcf5b",
".git/objects/dc/cea9d30c438e73e2e178381a24795d23068ef7": "735a7456df923b532b8e55dca68e6a5c",
".git/objects/dd/f7396c50d188a37de84d5f631f0c43db463b32": "428fd4842547ddbff17f5a353c897378",
".git/objects/de/e6a389b7b684cee3fc13dc61ee025a66429bcd": "43deab134bf4368233e30a55209a7d72",
".git/objects/e2/6af3a3c439d7b917f5f36c9de47aed1b044e0f": "711b1baf70da7de7948b2a1c2701d263",
".git/objects/e4/b116b2065fd4d045356f07a03c2851348bcb68": "29ffc5907592c1bebf3817d67423d4cc",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e7/e64857d256d78024c22b344d433962c316d8b8": "0a06d564dcd374bd8dfde1105681f12e",
".git/objects/ea/3ba360c7cc4c02e5eb690b7d99e6a80f16c3ad": "80fb114bcb0232fe5dd2c4ecc99e8392",
".git/objects/ea/88fb4cebb4e786515b42e1978387e2577e7b22": "d6aace0b7a778b8e0de524342a8ed9f0",
".git/objects/eb/51df79e9f04162bb926d314de4d854b446e673": "3f4de942b81426627fb0ab385cd3d43f",
".git/objects/eb/803f40d9c8b672058e029a90569b650d04b2bc": "0fde00ae8b3fb2dbc077332e835d3759",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/39228f24d9217a97d799276c856167ea62e908": "9cf4ad7c4ce84693336b15812299bdb7",
".git/objects/f1/6637a26b892f885d676ebfacf3fd443b295a19": "62a999db2e0d90b3f240ce89079aad1a",
".git/objects/f1/88f999c7de8daf56b8894ad22862a5bce1bf02": "ade37fb4ded8ba11a29ecf64c0335ac7",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f2/b298ef29dcefc188c90a723c94c61bdb1a6268": "186baca23c026ea2c8861d4eef2edbf6",
".git/objects/f8/0b388529af31fe2e42fb89898448ac0575d51f": "2e14ca10f63e4d819d382ecd4f540517",
".git/ORIG_HEAD": "1554c390a6c1bf272e9c0ae650cf097c",
".git/refs/heads/main": "1554c390a6c1bf272e9c0ae650cf097c",
".git/refs/heads/master": "1554c390a6c1bf272e9c0ae650cf097c",
".git/refs/remotes/churchDB/master": "a69bd718482d5ece721d5f6c48dea770",
".git/refs/remotes/origin/main": "1554c390a6c1bf272e9c0ae650cf097c",
".git/refs/remotes/origin/master": "a69bd718482d5ece721d5f6c48dea770",
"assets/AssetManifest.json": "6ad1cdd423f79a66744968e6be878b64",
"assets/AssetManifest.smcbin": "aed635ca094aa05d08dc55ad147a3ecd",
"assets/assets/alert.png": "5aa78b73ecb35e0a3dcbd090163308dd",
"assets/assets/home_ol.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/logout.png": "883bed8ec064c34f4e1a856965534611",
"assets/assets/mail.png": "406f2ffcfb5478556df1eae81601e0c5",
"assets/assets/menu_calendar.png": "23acc0c8ff1da1a07370fe4b87f6d475",
"assets/assets/menu_home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/menu_onboarding.png": "8d2b6073510603e21ed844aabdfd2c78",
"assets/assets/menu_recruitment.png": "61d1794424b32d4d267e08a61b20a85a",
"assets/assets/menu_report.png": "4879ce54c5babb60472e28f4ba36496c",
"assets/assets/menu_settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/more.png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/notification_image.png": "0d291870bd273d45bfc2811cddf7c107",
"assets/assets/phone.png": "0ae2f66e3ecf9b2e87b2a9aeb1a86422",
"assets/assets/profile-picture.jpeg": "fc19c362607d89480f9e4797b6b2ccce",
"assets/assets/search.png": "cacefd7d9d9dae0977ff022243433e8d",
"assets/assets/send.png": "1df0d1a089c1bee052ae276e864ccc06",
"assets/assets/sidebar_image.png": "254a7b607b593f00b011883a1e8ea4ff",
"assets/assets/user1.jpg": "eb029339e3ec9e799f1f2afa2fd5c592",
"assets/assets/user2.jpg": "3c16c4098ebf1d7777746084610047a8",
"assets/assets/user3.jpg": "e50e46d165528a7f0bb518c899babedd",
"assets/assets/user4.jpg": "298202557bc740b9f360fcd5aa8a11d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b326a2d2ea361f6cc5524371ce2d62f4",
"assets/NOTICES": "93cf53ea89b4a50b39b5c7c8bf3c2d96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb99ae55c3bc5f55ec3d6bcdfda8ec73",
"/": "cb99ae55c3bc5f55ec3d6bcdfda8ec73",
"main.dart.js": "ec2d5b7235ea22a2570bf7ef84a178a4",
"manifest.json": "bb3202c357150a646f42ddc6decf0a32",
"version.json": "12116e757bad5541fee40ec9a9374068"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
