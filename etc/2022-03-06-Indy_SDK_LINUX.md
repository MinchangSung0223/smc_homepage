---
title: "Indy7 SDK Linux 설정방법"
tags:
  - Blog
  - MathJax
  - Jekyll
  - LaTeX
use_math: true
Shell:      console, shell
sitemap :
  changefreq : daily
  priority : 1.0
---
# 1.SDK install
```bash
wget https://s3.ap-northeast-2.amazonaws.com/download.neuromeka.com/SDK-Installer/NRMKFoundation/Linux/NRMKIndySDK_v3.0.9_b20190729.tar.gz
wget https://s3.ap-northeast-2.amazonaws.com/download.neuromeka.com/SDK-Installer/LeanFramework/Linux/NRMKIndySDK-Lean-v2.3.0.1.tar.gz
tar xvf NRMKIndySDK*.tar.gz

cd NRMKIndySDK_v3.0.9_b20190729
./install.sh
./postinst.sh
cd ../

cd NRMKIndySDK-Lean-v2.3.0.1
./install.sh
 source /opt/neuromeka/NRMKFoundation/script/nrmk_indy_env.sh
 source /opt/neuromeka/NRMKFoundation/script/nrmk_indy_lean_env.sh
```
# 2. Example build
```bash
cd /opt/neuromeka/NRMKFoundation/example/LeanComponents/SampleJointControlComponent
cd build
cmake ..
make -j16

```

