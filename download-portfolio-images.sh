#!/bin/bash
# Download highest-resolution images from Adobe Portfolio CDN
# Generated from https://codychar.myportfolio.com/
#
# Each image has a hash token (?h=...) that is tied to the specific URL path.
# You CANNOT change the resize suffix without a matching hash.
# URLs without a resize suffix (e.g., just {uuid}.png) are the ORIGINAL full resolution.
# URLs with _rw_{width} are server-resized versions.
# The "original" URLs below serve the full uploaded resolution.

BASE_DIR="./portfolio-images"
CDN="https://cdn.myportfolio.com/059bb0af7e3a22cf3a52de95a759fee9"

download() {
    local dir="$1"
    local filename="$2"
    local url="$3"
    mkdir -p "$BASE_DIR/$dir"
    echo "  Downloading $filename..."
    curl -s -L -o "$BASE_DIR/$dir/$filename" "$url"
}

echo "========================================"
echo "TRIPP XR (13 unique content images)"
echo "========================================"
# Original (full res) images:
download "tripp-xr" "01ef8341.png" "$CDN/01ef8341-1aed-4fa9-ba53-8ea6018f7360.png?h=f5f29c1876ebb8d0945ca1f324b7cd63"
download "tripp-xr" "18851fd8.jpeg" "$CDN/18851fd8-cbaa-48d2-b2a3-7681e4f45f53.jpeg?h=1b27967fa370f5460fa9b31fe37c854a"
download "tripp-xr" "18d30212.png" "$CDN/18d30212-f771-4849-bd79-3fb7120e15df.png?h=43ba237d3d7a6a0271edb7ee50e90271"
download "tripp-xr" "18f9e971.png" "$CDN/18f9e971-d85d-43be-a7f3-3093c238d2ef.png?h=6d709a312d3244031767b1216af1210a"
download "tripp-xr" "52d51571.png" "$CDN/52d51571-9943-476f-a859-eec8fa54fecc.png?h=c9687b32964359d6c58e12634d860e70"
download "tripp-xr" "7db6477b.png" "$CDN/7db6477b-a56e-4d86-954b-90264a2f7935.png?h=752b78fdeec998dad684bd3c9d09c871"
download "tripp-xr" "9888d371.png" "$CDN/9888d371-3918-4bb3-8374-10a6133e0f71.png?h=00e14169da59e01965df91464afffc84"
download "tripp-xr" "b5496c77.png" "$CDN/b5496c77-426b-4909-8c68-c5f289b4ef40.png?h=3592727ba7ced0c2285f5ce2a655f7f2"
download "tripp-xr" "b58ee4b5.png" "$CDN/b58ee4b5-4c8a-41ac-98c0-dd4e734a9a8a.png?h=32a3100e6205753fc15735bc301df40b"
download "tripp-xr" "bb7dc7d8.png" "$CDN/bb7dc7d8-3860-43d9-a305-208c701f155d.png?h=85a91ef6c59257da9c6ef775115de6b6"
# GIFs (max available resolution - no original URL available):
download "tripp-xr" "40b7da48_600.gif" "$CDN/40b7da48-943d-461a-8739-82e5e41ebf69_rw_600.gif?h=29403b687735617671cc1b13c8e7d685"
download "tripp-xr" "5a57c4b3_1200.gif" "$CDN/5a57c4b3-dbb3-44ac-9328-1592ec906cfc_rw_1200.gif?h=133ec95fe962a5195eac2d8a6e2be0d7"
download "tripp-xr" "f3b5afdd_600.gif" "$CDN/f3b5afdd-c389-4bd3-a5d9-131d4b47b277_rw_600.gif?h=d76991c90f6077b4e124611c6d1a88c5"

echo ""
echo "========================================"
echo "MINECON EARTH PARTY (18 unique content images)"
echo "========================================"
# Original (full res) images:
download "minecon-earth-party" "22126acf.gif" "$CDN/22126acf-91a9-4d47-b4c3-d276a969d3a7.gif?h=1cdf41497e3dfc89eefd107d35d39b8d"
download "minecon-earth-party" "4bd75780.png" "$CDN/4bd75780-c655-482e-b665-46e9b798d633.png?h=cd008af2d906b40fca3acf07a50ebe99"
download "minecon-earth-party" "5dd15d9a.png" "$CDN/5dd15d9a-cb1a-406c-af4f-0e98e1246a87.png?h=a4a1f6dc070c25c5005673d53cb35e36"
download "minecon-earth-party" "68850106.gif" "$CDN/68850106-290d-4b0e-b1a7-d4bf0b06be8d.gif?h=a1c8435a157fb948ee9ac50c0d20dc1a"
download "minecon-earth-party" "735247ab.png" "$CDN/735247ab-f408-4c67-90fa-387a90d3f3a4.png?h=0664080e58f527a2b08c36cfd761a0be"
download "minecon-earth-party" "89596418.png" "$CDN/89596418-d6b3-4de8-bbd8-521e13c2b126.png?h=938053ae64fe6aa0136e1d430b213298"
download "minecon-earth-party" "9ce9cc32.png" "$CDN/9ce9cc32-655a-41bd-924c-ed38f45f7c81.png?h=31061392fbd87f37a18af6ea132154d1"
download "minecon-earth-party" "f3c73a6a.gif" "$CDN/f3c73a6a-45fb-4898-9320-ccd226d4016b.gif?h=09d5a6544462801a7b44e87f386ccb1c"
# Largest available resized versions (no original URL):
download "minecon-earth-party" "0d037c56_3840.png" "$CDN/0d037c56-34a2-471b-9fd2-b7f86da2bdc9_rw_3840.png?h=17df5d25dec8e063624b719dc735f8af"
download "minecon-earth-party" "32ef3062_1920.png" "$CDN/32ef3062-5acf-4ef9-846f-22d2646c9b08_rw_1920.png?h=e52c72420e3bc90a4bf172f36a71274b"
download "minecon-earth-party" "57ee395d_1920.gif" "$CDN/57ee395d-0109-458d-a204-22c94d35123d_rw_1920.gif?h=c9a68e0432b0da0e96e453b291ed16a7"
download "minecon-earth-party" "80344bdd_1920.png" "$CDN/80344bdd-b762-4030-ac1e-1ab55855f4c5_rw_1920.png?h=f9eac56ded3af8c18be91944aaa51e39"
download "minecon-earth-party" "87277473_3840.png" "$CDN/87277473-43c4-4ac3-b405-85e243bda755_rw_3840.png?h=105cefe33303b6f7da148457622774cb"
download "minecon-earth-party" "a0eb6a55_3840.png" "$CDN/a0eb6a55-c946-40a5-b21e-9ebd17c095ce_rw_3840.png?h=97c9f096b63bfde3a23942d0353f5c9d"
download "minecon-earth-party" "a9d60cd0_1920.gif" "$CDN/a9d60cd0-f259-4715-ae02-c375ffda24a6_rw_1920.gif?h=fe138b29a46a7d963d927e3f92ddc17f"
download "minecon-earth-party" "b4832eaf_3840.png" "$CDN/b4832eaf-ad69-47db-845d-233ee05eec0d_rw_3840.png?h=376cacd28f5c6fb28214f44d493837a4"
download "minecon-earth-party" "f0c3d5d7_1920.png" "$CDN/f0c3d5d7-57d5-4774-bf19-1167f1f20316_rw_1920.png?h=d666706c9594804c5586a45476015d80"
download "minecon-earth-party" "fc54e525_1920.gif" "$CDN/fc54e525-ab81-4b9f-96c8-32042f8a8868_rw_1920.gif?h=9f5ffaeea9880a3bc6efc6ffb39e113d"

echo ""
echo "========================================"
echo "RENAULT (10 unique content images)"
echo "========================================"
# Original (full res) images:
download "renault" "03012333.png" "$CDN/03012333-f95e-4eef-aee0-6cb3472cfefe.png?h=0f45d9fb5280b4f090a7746c4b19b1f3"
download "renault" "5586701b.png" "$CDN/5586701b-292a-4f54-a49b-39e8eabdd81c.png?h=d1473e1c18183c45ae43ad6c00cbe201"
download "renault" "74a7cee9.jpg" "$CDN/74a7cee9-04ad-41cd-af20-ecc621d025b1.jpg?h=4a56570147d8c88a8d0c47c4e997391b"
download "renault" "9d71cec6.png" "$CDN/9d71cec6-8ca7-45de-a171-a048d0c54f68.png?h=bde8d59e00e69d4d855c4739e66368e4"
download "renault" "c1e9f284.png" "$CDN/c1e9f284-554f-4023-94d7-cfaa993e5788.png?h=3dddd6f347b31599ddc9f53502724826"
download "renault" "e42f47f1.png" "$CDN/e42f47f1-a086-41e2-a173-d593f760e33b.png?h=cdf667d20ca1a94b723cbcf77220c56d"
download "renault" "f49072f1.png" "$CDN/f49072f1-88b4-4e2f-9319-41678d7bc8ad.png?h=30117d30442b062d2bd650af41d5ad03"
# Largest available resized versions (no original URL):
download "renault" "400ffdd5_1920.jpg" "$CDN/400ffdd5-6880-4e8f-a6d3-fde7511040ac_rw_1920.jpg?h=b3bb4dd119f91f0b206619aa2b7ab16c"
download "renault" "a05b8190_1920.jpg" "$CDN/a05b8190-48ee-4724-b512-a4931b6a519b_rw_1920.jpg?h=5e47e66188023fd508c3dd9dbc275da3"
download "renault" "fbb2399c_1920.jpg" "$CDN/fbb2399c-fd4d-4c39-8c73-dad1095bb068_rw_1920.jpg?h=1c57a1b48f27fc7f60b6e6ff61f48b83"

echo ""
echo "========================================"
echo "MICROSOFT RETAIL PORTAL UX/UI (5 unique content images)"
echo "========================================"
# All max at 1920px (no original URL available):
download "microsoft-retail-portal" "5da84f6b_1920.png" "$CDN/5da84f6b-67db-44ae-a4e3-7a75fdcc1228_rw_1920.png?h=3055b58c63b7d4c7ec05504e22d77e74"
download "microsoft-retail-portal" "68213e55_1920.png" "$CDN/68213e55-62c9-45b5-b276-1cfe92e5a2e0_rw_1920.png?h=8473e5610df7c3844b527ead4e494978"
download "microsoft-retail-portal" "cffa3c5f_1920.png" "$CDN/cffa3c5f-7dbe-400e-acb2-bc81566b9aff_rw_1920.png?h=5b903e7ce244cad71a826dd61b10aa95"
download "microsoft-retail-portal" "e7be18da_1920.png" "$CDN/e7be18da-c73a-4234-b607-d131e0b70fcf_rw_1920.png?h=42f5bec7b93196c2caffb127a683a0c6"
download "microsoft-retail-portal" "fcb7f738_1920.png" "$CDN/fcb7f738-29b5-4bec-bbb7-32cef1fc8cb4_rw_1920.png?h=4518ee05e830abe941b71c8cd7525f90"

echo ""
echo "========================================"
echo "MICROSOFT FLAGSHIP STORE LED TRANSITION (4 unique content images)"
echo "========================================"
download "microsoft-flagship-led" "c56ec6f2.jpg" "$CDN/c56ec6f2-9806-4d38-9fe5-5425de10a2cf.jpg?h=4a0160217fa651b60e4bdeb4af466afc"
download "microsoft-flagship-led" "594e9593_1920.jpg" "$CDN/594e9593-1052-4ea4-acd3-c48bb490c7b6_rw_1920.jpg?h=c07cbe7614d94ae729a93c3b61222387"
download "microsoft-flagship-led" "f7395204_1920.jpg" "$CDN/f7395204-989a-4f17-9aae-c4d8ee855158_rw_1920.jpg?h=5a18e4582ba5177856929717b1d8abd6"
download "microsoft-flagship-led" "ba4d85b4_1200.jpg" "$CDN/ba4d85b4-b184-408c-901b-b6eb208e6c24_rw_1200.jpg?h=13ce8dc130e28fcdc7a7a0d0f2fed30a"

echo ""
echo "========================================"
echo "MICROSOFT SURFACE (3 unique content images)"
echo "========================================"
# Original (full res) images:
download "microsoft-surface" "c1951b41.png" "$CDN/c1951b41-4ebd-45cd-8dc7-eb809440c842.png?h=497a86e05745c4a30b5d94e5242d6f51"
download "microsoft-surface" "cb6dde9b.jpg" "$CDN/cb6dde9b-ea2e-4bf2-b8f2-91dc2f1b51a4.jpg?h=59c689673562a3d008acc93b319f3ecb"
download "microsoft-surface" "ed8d7cdf.png" "$CDN/ed8d7cdf-c8dd-4baa-a3ce-afa986b36f2e.png?h=bdcaac93fec4573186f26750089fa5f3"

echo ""
echo "========================================"
echo "SHARED NAV THUMBNAILS (appear across pages)"
echo "========================================"
# These are the "You May Also Like" thumbnails - highest res versions:
download "shared-nav" "profile_bc4a6358.gif" "$CDN/bc4a6358-3aa4-4d43-bab7-74b541fefbbb_rwc_0x0x400x400x4096.gif?h=3f862757dc86e1e1c311d216a5a84dee"
download "shared-nav" "tripp-thumb_2684b34d_1616.png" "$CDN/2684b34d-2cb0-4ea9-a8d2-ecebfed40e4a_rwc_154x0x1616x1080x1616.png?h=af9c50f9b065b735cb2ae03d12dc50f3"
download "shared-nav" "surface-thumb_0a63704a_5120.jpg" "$CDN/0a63704a-d043-4867-940b-b6528a78a2f1_carw_2x1x5120.jpg?h=afb0efcd175366bec3cf8f60f92ec745"
download "shared-nav" "surface-thumb_0a63704a_car.jpg" "$CDN/0a63704a-d043-4867-940b-b6528a78a2f1_car_2x1.jpg?h=3ca3a44fa67691b784b467dbeed38f9f"
download "shared-nav" "retail-thumb_737fae08_1920.png" "$CDN/737fae08-3e88-4b1b-b40c-fd561498e47f_rwc_254x117x1435x959x1920.png?h=e667d87147135fb4895de6527c5ace47"
download "shared-nav" "minecon-thumb_7eaf642e_1920.png" "$CDN/7eaf642e-c01e-4844-a45e-9c004b6e56b3_rwc_154x0x1616x1080x1920.png?h=c74d38b321e6da0f5981e323b8119740"
download "shared-nav" "flagship-thumb_e2667c5a_1920.jpg" "$CDN/e2667c5a-99b1-4b3b-a868-4af0b44853d7_rwc_0x0x1918x1282x1920.jpg?h=1ac2c4bcb4752d8e5983b813fc86fe3c"
download "shared-nav" "renault-thumb_ff2e781f_5120.jpg" "$CDN/ff2e781f-9a6e-4213-8fc8-86974f7b789f_carw_2x1x5120.jpg?h=760ef51de3536cf06c1721e4d576bce4"
download "shared-nav" "renault-thumb_ff2e781f_car.jpg" "$CDN/ff2e781f-9a6e-4213-8fc8-86974f7b789f_car_2x1.jpg?h=c784254bbd8d617ecf702c3cc1886b2b"
download "shared-nav" "meta-thumb_ffd116b6_900.jpg" "$CDN/ffd116b6-2e38-49f3-8a7b-6fd7f962b5f1_rwc_0x40x900x601x900.jpg?h=bbc67fdb9538eb188b342a77676327b6"
download "shared-nav" "favicon_6b25b91d.png" "$CDN/6b25b91d-edc9-4099-8ed1-01f5237e2d7b_carw_1x1x32.png?h=761eb6e083f9cff6f8450ece639f2332"

echo ""
echo "Done! Downloaded to $BASE_DIR/"
echo "Total: 53 unique content images + 11 shared navigation images"
