---
title: "Windows11에서 WSL을 이용하여 ROS설치하기 "
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
+ windows 10 최신업데이트버전 설치
 https://github.com/AveYo/MediaCreationTool.bat


1.windows 11설치
 - pc 상태검사 앱 다운로드 후 상태확인
```bash
https://aka.ms/GetPCHealthCheckApp
```
 - 윈도우 11 installer 다운로드 후 설치
 ```bash
 https://go.microsoft.com/fwlink/?linkid=2171764
 ```
2. windows 11 설치 후 wsl을 이용하여 터미널 창 실행
![image](https://user-images.githubusercontent.com/53217819/138554378-6c74bb31-b25d-43f3-aba6-d176dc62e9af.png)

3. NVIDIA 드라이버 및 CUDA 설치 방법
 - 참고 : https://docs.nvidia.com/cuda/wsl-user-guide/index.html
 - 주소에서 CUDA 드라이버를 다운받고 설치 https://developer.nvidia.com/cuda/wsl/download
 - 설치 후 컴퓨터 재시작
 ![image](https://user-images.githubusercontent.com/53217819/138554486-2c628817-f8de-4d97-95eb-22afdb8c2ab9.png)


 - powershell을 관리자 권한으로 열고
  ```bash
      wsl --install
  ```
  
  - powershell을 관리자 권한으로 열고
  ```bash
      wsl --update
  ```
  

 - wsl 창을 열고 다음의 명령어를 입력하여 드라이버 설치
 ```bash
 wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
 sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
 wget https://developer.download.nvidia.com/compute/cuda/11.4.0/local_installers/cuda-repo-ubuntu2004-11-4-local_11.4.0-470.42.01-1_amd64.deb
 sudo dpkg -i cuda-repo-ubuntu2004-11-4-local_11.4.0-470.42.01-1_amd64.deb
 sudo apt-key add /var/cuda-repo-ubuntu2004-11-4-local/7fa2af80.pub
 sudo apt-get update
 sudo apt-get install -y cuda-toolkit-11-4
 ```
 - nvidia-smi를 통해 설치 확인
 ```bash
 nvidia-smi
 ```
![image](https://user-images.githubusercontent.com/53217819/138554608-6c2fd592-0cb8-482e-80e7-b7f9c41bc1fc.png)

4. wsl을 이용하여 docker 설치 ( root권한으로 진행 추천.)
```bash
curl https://get.docker.com | sh  
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
sudo apt-get update
sudo apt-get install -y nvidia-docker2      
sudo service docker stop
sudo service docker start
```
5. wsl을 이용하여 Ros 설치
 ```bash
 sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
 sudo apt install curl 
 curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
 sudo apt update
sudo apt install ros-noetic-desktop-full
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
sudo apt install python3-rosdep
sudo rosdep init
rosdep update
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws
catkin_make
echo "source ~/catkin_ws/devel/setup.sh" >> ~/.bashrc
source ~/.bashrc


 ```
 
+ Dynamixel SDK 설치
```bash
```
+ Poco 설치
```bash
```
