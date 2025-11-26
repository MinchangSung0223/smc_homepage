---
title: "Ubuntu20.04.2 Xenomai3.1 Alienware aurora a15"
tags:
  - Blog
  - MathJax
  - Jekyll
  - LaTeX
  - table
  - cell
use_math: true
Shell:      console, shell
sitemap :
  changefreq : daily
  priority : 1.0
---

# ubuntu 20.04.6 
# Xenomai 3.1.1
# NVIDIA DRIVER

``` bash
wget https://kr.download.nvidia.com/XFree86/Linux-x86_64/535.113.01/NVIDIA-Linux-x86_64-535.113.01.run
chmod 777 NVIDIA-Linux-x86_64-535.113.01.run
```
```bash
sudo gedit /etc/modprobe.d/blacklist.conf
```
```bash
blacklist nouveau
blacklist lbm-nouveau
options nouveau modeset=0
alias nouveau off
alias lbm-nouveau off
```

```bash
echo options nouveau modeset=0 | sudo tee -a /etc/modprobe.d/nouveau-kms.conf
sudo update-initramfs -u
sudo init 3
```
# CUDA 11.8
```bash
wget https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run
```
```bash
sudo gedit ~/.bashrc
```
```bash
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH
export PATH=/usr/local/cuda/bin:$PATH
```

# network_driver
```bash
https://www.realtek.com/en/directly-download?downloadid=e3140146c05ec811caa824c14016ba09
sudo apt install r8168-dkms
sudo chmod 777 autorun.sh
sudo ./autorun.sh
sudo reboot
```

