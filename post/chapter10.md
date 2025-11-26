---
sort: 1
---

# Lie Groups 1: Introduction and Examples
*Lie groups*은 노르웨이 수학자 Sopus Lie가 이름지은 *group*의 special case이다. 나아가 일반적인 로봇 책에서 다루는 Lie groups*은 역행렬을 갖는 정방행렬들을 원소로 하는 *matrix Lie groups*를 다룬다. 

matrix Lie groups은 vector spaces외의 수학적 구조에서 "the most like $\mathbb{R}^{n}$"라고 한다. 실제로 $\mathbb{R}^{n}$은 $+$ 연산과 함께 Lie Groups의 예시로 볼 수 있다. 좀 더 일반화 하여 보면 어떤 Lie Group상의 점 $G$와 $\mathbb{R}^n$상의 어떤 점은 locally indistinguishable하며, globally하게는 $G$는 orientable이다. 점 근처만 본다고 하면 $\mathbb{R}^{n}$과 유사하지만 globally하게 본다면 $\mathbb{R}^{n}$과 달리 방향을 갖는다. 

일반적으로 matrix Lie Groups에서는 연산자를 표기하지 않는다. 왜냐면 연산자가 행렬곱임이 명백하기 때문이다. 그러나 일반적인 Lie Groups를 다룰 때에는 항상 연산에 대한 논의가 필요하다. 따라서 연산자 $\circ$라고 정의하여 사용한다. $\circ$ 연산은 $g_1, g_2 \in G$일 때 $g_1 \circ g_2 \in G$를 만족하는 연산이다. 비슷한 연산은 두 벡터간의 덧셈($+$)연산이 있다. 기억해야할 중요한 점 두가지 

 1. Lie Groups는 일반적으로 "not comutative"이다. 즉, $g_1 \circ g_2 \neq g_2 \circ g_1$을 만족해야할 필요는 없다. 
 2. group내의 원소에 scalar를 곱하여 같은 group의 원소를 생성하는 것 또한 불가능하다.

## 10.1 Introduction to Group Theroy

### 10.1.1 Binary Operation
Group은 집합(set)과 연산(operation)으로 쌍을 이룬다. 어떤 set $G$가 주어졌을때 "*(closed) binary operation*"이란 $G$의 어떤 두개의 원소가 연산에 의해서 다시 $G$로 되돌아오는 연산을 의미한다. 


```note
$b:G \times G \rightarrow G$  with  $b(g_1,g_2) \doteq g_1 \circ g_2$
```

어떤 책에서는 $b(\cdot, \cdot)$ 이런 식으로 사용하기도 하고, 다른 어떤 책에서는 $\circ$를 이용해서 나타내기도 한다. 


그럼 binary operation의 예시를 들어보자. 정방행렬 set $G = \mathbb{R}^{N \times N}$라하고 $G$의 원소 $A,B \in G$일 때,

```note
  $\circ$ = matrix multiplication

  $A \circ B = AB \in G$
```
따라서 matrix multiplication은 binary operation이다. 다른 예시로 sum(+)연산의 경우도 해당된다. 3차원 벡터들로 예시를 들면 cross product($\times$)의 경우도 binary operation에 해당된다. 추가로 premutation연산도 binary operation에 해당한다.


그러나 모든 연산자가 binary operation은 아니다. 예시로 dot product($\cdot$)나 wedge product($\wedge$)(outer product는 벡터와 벡터를 연산하여 해당 세트의 벡터로 연산한다, 그러나 wedge product는 선, 면, 공간 등을 연산하여 다른 차원의 세트로 변환한다.)는 set의 원소가 다른 set으로 이동하므로 binary operation이 아니다. 유사하게 행렬 곱 중 정방행렬간의 곱이 아닌 서로 다른 크기의 행렬일 경우 matrix multiplication은 binary operation이 아니다.


### 10.1.2 Groups, Groupoids, and Semi-groups

```note
The pair $(G,\circ)$ consisting of the set $G$ and binary operation $\circ$ form a mathematical structure that is called a *groupoid* or a *magma*
```

groupoid라는 단어가 다른 의미를 다룰 수 도 있지만 여기서는 Group을 정의하기 위한 보다 큰 Category로 본다.

```note
  A *group* is a special kind of groupoid such that for any elements $g, g_1, g_2, g_3 \in G$, the
  following properties hold:


  1. $g_1 \circ (g_2 \circ g_3) =  (g_1 \circ g_2) \circ g_3 $


  2. There exists an element $e \in G$ such that $e \circ g = g$.


  3. For every element $g \in G$, there is an element $g^{-1} \in G$ such that $g^{-1} \circ g = e$

```

첫번째 특성을 결합법칙(associativity)이라 하고, 두번째 특성에서의 $e$를 $G$의 항등원(*identity* of $G$)라 한다. 그리고 $g^{-1}$를 $g \in G$의 역원(*inverse*)라고 한다. group은 위의 세 가지를 만족하면 성립하지만 특수하게 교환법칙이 성립하는 경우가 있다. 이러한 group의 경우 *commutative* group 또는 *Abelian* group이라 한다.


### A Concrete Example: Symmetry Operation on the Equilateral Triangle

어떤 형태를 유지한 채로의 연산은 group으로 설명할 수 있다. 예를 들어 어떤 원을 다른 위치의 원으로 이동시키거나, 공간 상의 어떤 직선을 다른 방향과 다른 위치로 변환하는 것처럼 형태를 유지한 채의 연산을 설명할 때에 group의 예로 설명된다. 다음의 예제는 정삼각형의 테이블의 꼭지점에 시계방향으로 1,2,3을 표기했다. 테이블 외부에도 1,2,3으로 표기되어 있으며 이것은 변하지 않는 상태이다. 테이블을 회전할 수 있으며 다음과 같이 여섯개의 상태로 정의하자.
![image](https://github.com/MinchangSung0223/MinchangSung0223.github.io/assets/53217819/f9e30619-0dae-4a2c-a985-59a29b87b7a8)

1. $g_0=e$, 아무런 움직임이 없는 경우이다. 
2. $g_1$, 시계 반대방향으로 $2\pi/3 [rad]$ 만큼 회전
3. $g_2$, 시계 반대방향으로 $4\pi/3 [rad]$ 만큼 회전
4. $g_3$, 테이블의 1과 테이블 밖의 1을 맞추고 $\pi [rad]$ 만큼 회전
5. $g_4$, 테이블의 2와 테이블 밖의 2를 맞추고 $\pi [rad]$ 만큼 회전
6. $g_5$, 테이블의 3과 테이블 밖의 3을 맞추고 $\pi [rad]$ 만큼 회전

이 연산들의 set을 다음과 같이 정의하자

$$
  G_T \doteq \{ e,g_1,g_2,g_3,g_4,g_5\}.
$$

이제 set $G_T$의 원소들 간의 연산을 $\circ$로 정의하고 각 원소별 연산결과를 표로 나타내면 다음과 같다.

| $\circ$ | $e$ | $g_1$ | $g_2$ | $g_3$ | $g_4$ | $g_5$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $e$ | $e$ | $g_1$ | $g_2$ | $g_3$ | $g_4$ | $g_5$ |
| $g_1$ | $g_1$ | $g_2$ | $e$ | $g_4$ | $g_5$ | $g_3$ |
| $g_2$ | $g_2$ | $e$ | $g_1$ | $g_5$ | $g_3$ | $g_4$ |
| $g_3$ | $g_3$ | $g_5$ | $g_4$ | $e$ | $g_2$ | $g_1$ |
| $g_4$ | $g_4$ | $g_3$ | $g_5$ | $g_1$ | $e$ | $g_2$ |
| $g_5$ | $g_5$ | $g_4$ | $g_3$ | $g_2$ | $g_1$ | $e$ |


그럼 이 표를 이용해서 group $(G_T, \circ)$가 group의 정의를 만족하는가를 확인해보자.(단,$\circ$는 binary operation)

1. $(G_T, \circ)$는 $g_i,g_j,g_k \in G_T$에 대해서 $(g_i \circ g_j) \circ g_k=g_i \circ (g_j \circ g_k)$를 만족.
2. 모든 원소에 대한 항등원 $e$가 존재하며 unique
3. 모든 원소에 대한 역원 $g^{-1}$가 존재하며 unique. (ex. $g_2 \circ g_1 = e$)

따라서 $(G_T,\circ)$는 group의 정의를 만족하며 group이라 할 수 있다.

#### Abstract Group Theroy
set $\mathbb{R}^3$과 cross product연산은 왜 group이 아닐까? 

1. cross product는 not associative
$$
  (\mathbf{a} \times  \mathbf{b}) \times \mathbf{c} \neq \mathbf{a} \times  (\mathbf{b} \times \mathbf{c})
$$

2. 항등원이 없음.
3. 역원 또한 없음.


그럼 $\mathbb{R}^{N\times N}$과 matrix multiplication은 group일까? 이때는 "almost" a group이라 하는데 왜그럴까? 일반적으로 matrix는 singular인 경우 역원이 존재하지 않는다. 이경우에 대해서는 3번 성질이 성립하지 않고 이때는 *semi-group*이라 일컷는다.


역행렬이 존재하는 $N \times N$ 실수 정방행렬 set를 다음과 같이 정의한다.

$$
  GL(N,\mathbb{R}) \doteq \{ A \in \mathbb{R}^{N\times n} | det A \neq 0\}
$$

이 set은 matrix multiplication 연산과 함께 the *general linear group* "over the real numbers"라 한다. 보다 일반적으로는 $\mathbb{R}$은 어떤 field $\mathbb{F}$나, 복소수 $\mathbb{C}$ 등으로 대체될 수 있다.


이 group의 항등원은 $\mathbb{I}_N$이라 나타내며 대각 원소가 1인 $N \times N$ identity matirx이다.


determinant가 항상 양수인 positive matrix에 대한 set은 다음과 같이 정의한다.

$$
  GL^{+}(N,\mathbb{R}) \doteq \{ A \in \mathbb{R}^{N\times n} | det A > 0\}
$$

위의 set도 matrix multiplication 연산과 같이 group으로 정의된다. 일반적으로 행렬에 대한 set들은 matrix multiplication 연산자가 당연하기 때문에 set의 이름을 그대로 group의 이름으로 종종 사용한다.
### 10.1.3 Subgroups
```note
A *subgroup* is a subset of a group $( H \subseteq G)$ which is itself a group that is closed under the group operation of $G$. This means that $h^{-1} \in H$ whenever $h \in H$. The notation for this is $H \leq G$. If $H \leq G$ and $H \neq G$, then $H$ is called a proper subgroup of $G$, which is denoted as $H<G$. This notation parallels that of a proper subset. Each group has at least two improper subgroups: $\{e\}$ and itself.
```

*subgroup*이란 group의 subset$(H \subseteq G)$인데 $G$의 group operation에 대해서 closed인 subset을 의미한다.
이 의미는 $h \in H$에 대해서 $h^{-1} \in H$가 항상 존재함을 의미하며 $H\leq G$로 표현한다. 이때 $H \neq G$인 경우에 대해서는 *proper subgroup* of $G$라 하고 $H<G$로 나타낸다. 
각 group은 $\{e\}$과 group자기자신으로 적어도 두개의 improper subgroups를 갖는다.


예시로 실수는 복소수의 special case이다. 따라서 $GL(N,\mathbb{R}) < GL(N,\mathbb{C})$이며, $\mathrm{det}(AB) = \mathrm{det}(A)\mathrm{det}(B)$이므로

$$
  SL(N,\mathbb{F}) \doteq \{ A \in  \mathbb{F}^{N \times N} | \mathrm{det}(A) = +1 \} \subset GL(N,\mathbb{F})
$$

위와 같이 *special linear group*을 정의할 수 있다. 그리고 $SL(N,\mathbb{F}) < GL(N,\mathbb{F})$ 이다.

다른 예제로는 $GL(N,\mathbf{C})$의 subset인 *unitary group*이 있다. 

$$
  U(N) \doteq \{ A \in  \mathbb{C}^{N \times N} | AA^{\ast} = \mathbf{I} \} < GL(N,\mathbb{C})
$$


*special unitary group*

$$
  SU(N) \doteq U(N) \cap SL(N,\mathbf{C}) < GL(N,\mathbb{C})
$$


*orthogonal group*


$$
  O(N,\mathbb{R})\doteq \{ A \in GL(N,\mathbb{R}) | AA^T = \mathbb{I}\} = U(N) \cap GL(N,\mathbb{R})
$$


*special orthogonal group*


$$
  SO(N)\doteq \{ A \in GL(N,\mathbb{R}) | AA^T = \mathbb{I},\mathrm{det} A = 1 \} = U(N) \cap SL(N,\mathbb{R})
$$


*conjugate subgroup* 


group theory에서 종종 다뤄지는 부분으로 여기서 subgroup은 group의 operation에 의한 conjugate연산에 의해서 생성된다.

$$
\begin{aligned}
gHg^{-1} \doteq& \{ g \circ h \circ g^{-1} | h \in H\} 
\\ 
&\text{ for a single(fixed) } g \in G \text{ with }  g \notin H<G
\end{aligned}
$$


예를들면 만약 $G = SO(3)$ 이고 $H \cong SO(2) $라 할때($\cong$의 의미는 근본적으로는 같으나 같진 않은 경우) 다음과 같이 행렬을 구성하자.

$$
R_3(\theta)=\left(\begin{array}{ccc}
\cos \theta & -\sin \theta & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1
\end{array}\right)
$$

만약에 $g_n = [\mathbf{a},\mathbf{b},\mathbf{n}] \in SO(3)$ 이면 subgroup $K_n \doteq g_n H g^{-1}_n < SO(3)$으로 정의하며 위의 행렬처럼 정의한 경우 conjugate 연산한 경우 $\mathbf{n}$은 고정된다. 


일반적으로 만약 $H_1,H_2 \leq G$이며 모든 g에 대해서 $gH_1g^{-1} = H_2$인 경우 "$H_1$와 $H_2$는 서로 conjugate하다"라고 한다. 

어떤 subgroup $N\leq G$이며 모든 $g \in G$에 대해 $gNg^{-1} = N$라면  "*normal* subgroup of $G$"라고 한다.(자기 자신에 대해서 conjugate한 경우). 이 경우 $N \unlhd G$로 표기한다. 이때 $N=G$가 가능한 경우이며 $N \neq G$인 경우는 $N\lhd G$로 표기한다.( normal and proper subgroup)

그럼 table예제로 돌아가보자. 예제에서의 proper subgroups는 table을 보고 구할 수 있다.


| $\circ$ | $e$ | $g_1$ | $g_2$ | $g_3$ | $g_4$ | $g_5$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $e$ | $e$ | $g_1$ | $g_2$ | $g_3$ | $g_4$ | $g_5$ |
| $g_1$ | $g_1$ | $g_2$ | $e$ | $g_4$ | $g_5$ | $g_3$ |
| $g_2$ | $g_2$ | $e$ | $g_1$ | $g_5$ | $g_3$ | $g_4$ |
| $g_3$ | $g_3$ | $g_5$ | $g_4$ | $e$ | $g_2$ | $g_1$ |
| $g_4$ | $g_4$ | $g_3$ | $g_5$ | $g_1$ | $e$ | $g_2$ |
| $g_5$ | $g_5$ | $g_4$ | $g_3$ | $g_2$ | $g_1$ | $e$ |

proper subgroups : $\{e\}, H_1 = \{e,g_1,g_2  \}, H_2 = \{e,g_3 \},H_3=\{e,g_4\} \text{ and } H_4=\{e,g_4 \}$

subgroup H_2,H_3,H_4는 서로 conjugate하다. 

$$
g_1 H_2 g_1^{-1} = H_4; ~~ 
g_1 H_3 g_1^{-1} = H_2; ~~
g_1 H_4 g_1^{-1} = H_3
$$

모든 $g \in G$에 대해서 H_1은 자신에 대해 conjugate이므로 normal subgroup이다.

$$
g H_1 g^{-1} = H_1
$$

두개의 subgroup $H \neq G$와 $K \neq G$일때 product는

$$
HK \doteq \{h \circ k | h \in H, k \in K \}
$$

로 정의하고 subset $HK \subseteq G$ 이 된다.(subgroup의 특성을 갖추지 않을 수 있음). 

table group $(G_T,\circ)$로 예를 들면, 

$$
\begin{aligned}
H_1H_i = H_iH_1 = G \text{ for } i=2,3,4\\
H_2H_3 = \{e,g_2,g_3,g_4\} \subset G\\
H_3H_2 = \{e,g_1,g_3,g_4\} \subset G
\end{aligned}
$$

여기서 만약 $N \unlhd G$ 이며 $H \neq G$이면 $NH=HN$이다. 그러나 subgroups중에 하나가 normal이 아니라면 성립하지 않음.

### 10.1.4 Group Actions and Transformation Groups
*transformation group* 
```note
*transformation group* $(G,\circ)$  is a group that acts on a set S in such a way that $g \cdot x \in S$ is defined for all $x \in S$ and $g \in G$ and has the properties


$$
 e \cdot x  = x
$$
$$
 (g_1 \circ g_2) \cdot x = g_1 \cdot (g_2 \cdot x) \in S
$$

for all $x \in S$ and $e,g_1,g_2 \in G$. The operation $\cdot$ defines the *action* of $G$ on $S$
```

여기서 $\cdot$으로 표기되는 operation을 *action*으로 정의한다. 어떤 set S상에서의 원소를 S의 다른 원소로 이동시키는 것을 의미한다. 이 때 $g \cdot x = x$ 인 경우, 즉 x에 대한 g의 action이 x가 되는 경우 $g$가 $G$의 항등원 $e$가 되며 이 경우를 *free* action이라 한다. 따라서 free인 경우 항등원 이외의 원소는 x를 x로 유지하지 않는다.


```note
If $S$ is a set and $G$ is a group that acts on it, the notation $S / G$ (or $G \backslash S$ ) is used to denote the set of equivalence classes of $S$ under the action of $G$.
```


```note
 In other words, if $G$ does not act transitively on $S$, then it divides it into disjoint equivalence classes called *orbits*
```


이를 보여주는 예제가 바로 $\mathbb{R}^{n}/SO(n)$ ( or $SO(n)\backslash  \mathbb{R}^n$) 이다.  

$\omega \in \mathbb{R}^{3}$의 원소를 $R \in SO(3)$을 이용하여 다음과 같이 나타낼 수 있다.

$$
  \omega^\prime = R \omega \in \mathbb{R}^3
$$

이 경우 $\mathbb{R}^{3}/SO(3)$ 으로 나타낼 수 있다. 많은 책들에서 $\mathbb{R}^{3}/SO(3)$  로 표기한다. 그러나 이 책에서는 group을 먼저 적는다..  ($SO(n)\backslash \mathbb{R}^{n}$), 의미적으로는 같다.


### 10.1.5 Cosets
### 10.1.6 Coset Spaces and Quotient Groups
### 10.1.7 Double-Coset Decompositions
### 10.1.8 Mappings Between Groups
#### Homomorphisms
#### Isomorphisms
#### Automorphisms
### Generating New Mappings from Old Ones
#### Functions
### 10.1.9 Products of Groups
#### Direct Products
#### Semi-direct Products
#### Wreath Products

## 10.2 Matrix Lie Groups and Lie Algebras
### 10.2.1 A Usable Definition of Matrix Lie Groups
### 10.2.2 Broad Classes of Matrix Lie Groups
### 10.2.3 The Exponential and Logarithm Maps
### 10.2.4 The $\vee$ Operator
### 10.2.5 The Adjoint Operator $Ad(g)$
### 10.2.6 The Lie Bracket and $ad(X)$
### 10.2.7 The Baker–Campbell–Hausdorff Formula
## 10.3 Change of Basis in a Matrix Lie Algebra
### 10.3.1 General Change of Basis
### 10.3.2 Invariance of Functions of Structure Constants
### 10.3.3 Changes of Basis Due to Adjoint Action
## 10.4 Inner Products on Matrix Lie Algebras
### 10.4.1 Calculating Jacobians
### 10.4.2 Invariant Vector Fields
## 10.5 Adjoint Matrices and the Killing Form
### 10.5.1 The Killing Form
### 10.5.2 The Matrices of $Ad(g)$, $Ad^{\ast}(g)$, $ad(X)$, and $B(X, Y )$
### 10.5.3 Relationship Between $ad(X)$ and $B(X, Y )$, and the Structure Constants
### 10.5.4 Conditions for Unimodularity
## 10.6 Examples
### 10.6.1 The Heisenberg Nilpotent Group
### 10.6.2 The Group of Rigid-Body Motions of the Euclidean Plane, $SE(2)$
### 10.6.3 The Group $SL(2, \mathbb{R})$
### 10.6.4 The Motion Group of the Lobachevsky Plane, $L(2)$
### 10.6.5 The Lorentz Group, $SO(2,1)$
### 10.6.6 The Rotation Group, $SO(3)$
### 10.6.7 The Group $GL(2, \mathbb{R})$
### 10.6.8 The Scale-Euclidean Group of the Plane, $SIM(2)$
### 10.6.9 $SE(3)$, The Group of Rigid-Body Motions
### 10.6.10 The Weyl–Heisenberg Group and Its Semidirect Product with $SL(2, \mathbb{R})$

## 10.7 Objects That Are Not Quite Groups
### Case Study 1:
### Case Study 2:
### Case Study 3:
### Case Study 4:
### Case Study 5:
## 10.8 Chapter Summary
## 10.9 Exercises














<!-- $$
\begin{aligned}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{aligned}
$$
 -->
