---
title: "Modern Robotics MATLAB Example"
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

이 post는 MATLAB을 이용해 Modern robotics 책의 8장까지의 내용을 구현하는 과정을 담고 있습니다.
예제파일은   [https://github.com/tjdalsckd/ModernRobotics_Matlab_Example](https://github.com/tjdalsckd/ModernRobotics_Matlab_Example) 에 포함되어 있습니다.

## load URDF
다운받은 폴더에 불러오려는 urdf 파일을 넣고 다음과 같음 함수로 Slist,Mlist,Glist,M,w,p,robot을 얻을 수 있습니다.


- w : 각 조인트의 회전 축 방향값입니다. 조인트 개수가 n개일 때, n x 3 행렬로 구성되어 있습니다.
- p : 각 조인트의 회전 축 위치값입니다. 조인트 개수가 n개일 때, n x 3 행렬로 구성되어 있습니다.

- Slist : Screw list, Forward Kinematics를 해석하기 위한 값입니다. w와 p를 이용하여 선속도 v =(- w x p)을 구하고, $S_i=[w(1), w(2), w(3), v(1), v(2), v(3)]^{T}$ 와 같이 계산되는 값입니다. base로부터 각 조인트 위치의 Screw 값을 담고 있습니다.

- Mlist : CoM에 대한 정보를 담고 있는 행렬값입니다. Dynamics해석을 위해 필요한 행렬이며 조인트의 개수가 n개 일때, base frame을 {0}이라 하고 end effector frame을 {n+1}이라 정의하면 CoM까지의 Homogeneous Transformation은 다음과 같이 표현됩니다.(i는 0 ~ n+1)

    - $M_{0,1}$ : base부터 1번 링크의 CoM까지의 Homogeneous Transformation 

    - $M_{1,2}$ : 1번 링크의 CoM부터  2번 링크의 CoM까지의 Homogeneous Transformation 

    - $M_{i-1,i}$ : i-1번 링크의 CoM부터  i번 링크의 CoM까지의 Homogeneous Transformation 

- Glist : Inertia Matrix와 mass 값을 이용한 6x6 행렬값입니다. base link는 제외하고 생성합니다.

- robot : matlab importrobot함수의 리턴값입니다.


```bash
  [Slist,Mlist,Glist,M,w,p,robot] = load_urdf("indy7.urdf",6)
```

## Forward Kinematics
각 조인트 위치까지의 Forward Kinematics를 계산합니다.
- FKlist : FK의 결과인 Homogeneous Transformation들의 값입니다. FKlist{end}는 end-effector의 Homogeneous Transformation을 의미합니다.

```bash
   FKlist = getFKlist(w,p,thetalist,M);
```

## Forward Dynamics
현재의 토크입력, 끝단힘, 위치, 속도, 가속도 등을 이용하여 다음 상태의 가속도를 계산합니다.
```bash
    taulist = [0,0,0,0,0,0]';
    Ftip = [0,0,0,0,0,0]';
    ddthetalist = ForwardDynamics(thetalist, dthetalist, taulist, ...
                                           g, Ftip, Mlist, Glist, Slist);
```
## Inverse Dynamics 
- Mass Matrix
```bash
  mMat = MassMatrix(thetalist, Mlist, Glist, Slist)
```
- coriolis Matrix
```bash
  cMat = VelQuadraticForces(thetalist, dthetalist, Mlist, Glist, Slist)
```

- Gravity Matrix
```bash
  g = [0; 0; -9.8];
  gMat = GravityForces(thetalist, g, Mlist, Glist, Slist)
```

## 시뮬레이션 영상
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/53217819/158019802-aa66b9f2-74de-4e49-9967-e2c0d886cf86.gif)


https://catalog.ngc.nvidia.com/orgs/nvidia/containers/isaac-sim

