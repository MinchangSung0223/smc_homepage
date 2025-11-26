---
title: "GPU-Voxels Realsense Indy7 연동"
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
### terminator를 이용하여 여러개의 터미널 세팅
```shell
sudo apt-get install terminator
su sung
gedit ~/.config/terminator/config

[global_config]
[keybindings]
[profiles]
  [[default]]
    cursor_color = "#aaaaaa"
  [[New Profile]]
    cursor_color = "#aaaaaa"
[layouts]
  [[default]]
    [[[child0]]]
      type = Window
      parent = ""
      order = 0
      position = 0:27
      maximised = False
      fullscreen = False
      size = 574, 974
      title = sung@sung: ~
      last_active_term = 0b2f2b78-0ca5-4a59-8383-499cac1571ee
      last_active_window = True
    [[[child1]]]
      type = VPaned
      parent = child0
      order = 0
      position = 484
      ratio = 0.49948400412796695
    [[[child2]]]
      type = VPaned
      parent = child1
      order = 0
      position = 237
      ratio = 0.49478079331941544
    [[[terminal3]]]
      type = Terminal
      parent = child2
      order = 0
      profile = New Profile
      uuid = 0b2f2b78-0ca5-4a59-8383-499cac1571ee
      command = echo 'sy3253' | sudo -S su -c whoami; clear;sudo -S su root
    [[[terminal4]]]
      type = Terminal
      parent = child2
      order = 1
      profile = default
      uuid = e6a2ccfd-e5a3-4f2e-868a-44bb28da7f4f
      command = echo 'sy3253' | sudo -S su -c whoami; clear;sudo -S su root
    [[[child5]]]
      type = VPaned
      parent = child1
      order = 1
      position = 240
      ratio = 0.49586776859504134
    [[[terminal6]]]
      type = Terminal
      parent = child5
      order = 0
      profile = default
      uuid = d23c7307-6a52-49fd-8524-05aa201c030b
      command = echo 'sy3253' | sudo -S su -c whoami; clear;sudo -S su root
    [[[terminal7]]]
      type = Terminal
      parent = child5
      order = 1
      profile = default
      uuid = 2637f0ac-8d18-4a3b-a62a-ec7062e6585d
      command = echo 'sy3253' | sudo -S su -c whoami; clear;sudo -S su root
  [[New Layout]]
    [[[child0]]]
      type = Window
      parent = ""
      order = 0
      position = 0:27
      maximised = False
      fullscreen = False
      size = 574, 974
      title = sung@sung: ~
      last_active_term = 0b2f2b78-0ca5-4a59-8383-499cac1571ee
      last_active_window = True
    [[[child1]]]
      type = VPaned
      parent = child0
      order = 0
      position = 484
      ratio = 0.49948400412796695
    [[[child2]]]
      type = VPaned
      parent = child1
      order = 0
      position = 237
      ratio = 0.49478079331941544
    [[[terminal3]]]
      type = Terminal
      parent = child2
      order = 0
      profile = New Profile
      uuid = 0b2f2b78-0ca5-4a59-8383-499cac1571ee
      command = su root;sy3253
    [[[terminal4]]]
      type = Terminal
      parent = child2
      order = 1
      profile = default
      uuid = e6a2ccfd-e5a3-4f2e-868a-44bb28da7f4f
      command = su root;sy3253
    [[[child5]]]
      type = VPaned
      parent = child1
      order = 1
      position = 240
      ratio = 0.49586776859504134
    [[[terminal6]]]
      type = Terminal
      parent = child5
      order = 0
      profile = default
      uuid = d23c7307-6a52-49fd-8524-05aa201c030b
      command = su root;sy3253
    [[[terminal7]]]
      type = Terminal
      parent = child5
      order = 1
      profile = default
      uuid = 2637f0ac-8d18-4a3b-a62a-ec7062e6585d
      command = su root;sy3253
[plugins]
    
    

```
수평 분할 ctrl+shift+O
수직 분할 ctrl+shift+t

#### terminal 1

```shell
roslaunch realsense2_camera demo_pointcloud.launch
```

#### terminal 2

```shell
roslaunch indy_driver_py indy7_moveit_dcp.launch robot_ip:=192.168.0.7 robot_name:=NRMK-Indy7
```

#### terminal 3

```shell
cd workspace/gpu-voxels/build/bin/
export GPU_VOXELS_MODEL_PATH=/home/sung/workspace/gpu-voxels/packages/gpu_voxels/models/
./distance_ros_demo -r -135 -p 0 -y 90
```

#### terminal 4

```shell
cd workspace/gpu-voxels/build/bin/
export GPU_VOXELS_MODEL_PATH=/home/sung/workspace/gpu-voxels/packages/gpu_voxels/models/
./gpu_voxels_visualizer
```
![Screenshot from 2020-11-04 20-29-06](https://user-images.githubusercontent.com/53217819/98106218-805aba00-1edc-11eb-8748-ff70a703018f.png)

![Screenshot from 2020-11-04 20-29-25](https://user-images.githubusercontent.com/53217819/98106225-82247d80-1edc-11eb-82f0-df80183c5cdb.png)


#### indy c++ build
g++ -std=c++11 -o test.out test_smc.cpp IndyDCP.cpp IndyDCPConnector.cpp IndyDCPException.cpp
