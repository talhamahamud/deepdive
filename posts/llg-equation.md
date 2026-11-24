# Derivation of the Landau–Lifshitz–Gilbert equation

The precession part of the LLG equation follows from classical mechanics plus the gyromagnetic relation. The damping part is phenomenological: it is postulated to meet three physical requirements, not derived from a microscopic model. This note keeps one sign convention and one unit system throughout.

## 0. Conventions

SI units. Fields **H** are in A/m, flux density **B** = μ₀**H** in tesla.

| Symbol | Meaning | Value / unit |
| --- | --- | --- |
| $\gamma$ | Electron gyromagnetic ratio, taken **positive** | $g_e e / 2m_e \approx 1.76086\times10^{11}$ rad s⁻¹ T⁻¹ |
| $\gamma_0$ | $\mu_0\gamma$, the form used with **H** | $\approx 2.2128\times10^{5}$ m A⁻¹ s⁻¹ |
| $\mathbf{M}$ | Magnetization, $\lvert\mathbf{M}\rvert = M_s$ | A/m |
| $\mathbf{m}$ | $\mathbf{M}/M_s$, unit vector | dimensionless |
| $\alpha$ | Gilbert damping constant | dimensionless |

The electron's negative charge appears as an explicit minus sign, never inside γ. Every equation below can be written with **B** instead of **H** by replacing $\gamma_0\mathbf{H}$ with $\gamma\mathbf{B}$.

## 1. Torque on a magnetic moment

A moment **μ** in a field has energy

$$
U = -\mu_0\,\boldsymbol{\mu}\cdot\mathbf{H}
$$

Rotate the moment by an infinitesimal angle $\delta\boldsymbol{\theta}$, so that $\delta\boldsymbol{\mu} = \delta\boldsymbol{\theta}\times\boldsymbol{\mu}$. The energy changes by

$$
\delta U = -\mu_0\,(\delta\boldsymbol{\theta}\times\boldsymbol{\mu})\cdot\mathbf{H} = -\mu_0\,\delta\boldsymbol{\theta}\cdot(\boldsymbol{\mu}\times\mathbf{H})
$$

The torque is defined by $\delta U = -\boldsymbol{\tau}\cdot\delta\boldsymbol{\theta}$, so

$$
\boldsymbol{\tau} = \mu_0\,\boldsymbol{\mu}\times\mathbf{H}
$$

## 2. From torque to precession

Torque is the rate of change of angular momentum:

$$
\frac{d\mathbf{L}}{dt} = \boldsymbol{\tau}
$$

For an electron the moment is antiparallel to its angular momentum:

$$
\boldsymbol{\mu} = -\gamma\,\mathbf{L}
$$

Multiplying the torque equation by $-\gamma$:

$$
\frac{d\boldsymbol{\mu}}{dt} = -\gamma\mu_0\,\boldsymbol{\mu}\times\mathbf{H} = -\gamma_0\,\boldsymbol{\mu}\times\mathbf{H}
$$

Magnetization is moment per unit volume, $\mathbf{M} = \sum\boldsymbol{\mu}/V$, and the equation is linear in **μ**, so

$$
\frac{d\mathbf{M}}{dt} = -\gamma_0\,\mathbf{M}\times\mathbf{H}
$$

### 2.1 What this equation does

**Magnitude is conserved.** Dot both sides with **M**:

$$
\mathbf{M}\cdot\frac{d\mathbf{M}}{dt} = \tfrac12\frac{d}{dt}|\mathbf{M}|^2 = -\gamma_0\,\mathbf{M}\cdot(\mathbf{M}\times\mathbf{H}) = 0
$$

So $|\mathbf{M}| = M_s$ is constant and the tip of **M** moves on a sphere.

**Energy is conserved.** Dot both sides with **H** (static field): $\mathbf{H}\cdot d\mathbf{M}/dt = 0$, so $\mathbf{M}\cdot\mathbf{H}$ is constant.

**The motion is Larmor precession.** Rewrite the equation as

$$
\frac{d\mathbf{M}}{dt} = \boldsymbol{\omega}\times\mathbf{M}, \qquad \boldsymbol{\omega} = \gamma_0\mathbf{H}
$$

**M** rotates about **H** at $\omega_0 = \gamma_0 H = \gamma B$, counter-clockwise when viewed looking back along **H** (right-handed about **H**). The angle between **M** and **H** never changes.

## 3. The effective field

In a ferromagnet **M** responds to more than the applied field. All interactions are collected in the free energy $E[\mathbf{m}] = \int\varepsilon\,dV$, and the effective field is its functional derivative:

$$
\mathbf{H}_{\text{eff}} = -\frac{1}{\mu_0 M_s}\frac{\delta E}{\delta\mathbf{m}}
$$

| Contribution | Energy density $\varepsilon$ | Field |
| --- | --- | --- |
| Exchange | $A\,(\nabla\mathbf{m})^2$ | $\dfrac{2A}{\mu_0 M_s}\nabla^2\mathbf{m}$ |
| Uniaxial anisotropy | $K\left[1-(\mathbf{m}\cdot\hat{\mathbf{n}})^2\right]$ | $\dfrac{2K}{\mu_0 M_s}(\mathbf{m}\cdot\hat{\mathbf{n}})\,\hat{\mathbf{n}}$ |
| Zeeman | $-\mu_0 M_s\,\mathbf{m}\cdot\mathbf{H}_{\text{ext}}$ | $\mathbf{H}_{\text{ext}}$ |
| Demagnetization | $-\tfrac12\mu_0 M_s\,\mathbf{m}\cdot\mathbf{H}_d$ | $\mathbf{H}_d$ |

In terms of the unit vector, the undamped equation is

$$
\frac{\partial\mathbf{m}}{\partial t} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}}
$$

For a static applied field, the definition of $\mathbf{H}_{\text{eff}}$ gives the rate of change of the energy for any motion of **m**:

$$
\frac{dE}{dt} = \int\frac{\delta E}{\delta\mathbf{m}}\cdot\frac{\partial\mathbf{m}}{\partial t}\,dV = -\mu_0 M_s\int\mathbf{H}_{\text{eff}}\cdot\frac{\partial\mathbf{m}}{\partial t}\,dV
$$

This formula is used twice below.

## 4. Why damping is needed

The undamped equation precesses forever and never reaches equilibrium. Real magnets relax toward $\mathbf{m}\parallel\mathbf{H}_{\text{eff}}$, losing energy to the lattice and conduction electrons (through spin–orbit coupling, magnon–phonon and magnon–electron scattering).

A damping term must:

1. Lower the energy, $dE/dt \le 0$.
2. Preserve $|\mathbf{m}| = 1$, so it must be perpendicular to **m**.
3. Vanish at equilibrium, when $\mathbf{m}\parallel\mathbf{H}_{\text{eff}}$.

Define the part of the field perpendicular to **m**:

$$
\mathbf{H}_\perp \equiv \mathbf{H}_{\text{eff}} - \mathbf{m}\,(\mathbf{m}\cdot\mathbf{H}_{\text{eff}})
$$

Using $\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$ with $|\mathbf{m}|=1$:

$$
\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}}) = \mathbf{m}\,(\mathbf{m}\cdot\mathbf{H}_{\text{eff}}) - \mathbf{H}_{\text{eff}} = -\mathbf{H}_\perp
$$

$\mathbf{H}_\perp$ is tangent to the sphere and points from **m** toward $\mathbf{H}_{\text{eff}}$. The double cross product points the opposite way, **away** from the field. A damping term therefore needs a **minus** sign in front of $\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}})$.

## 5. Landau–Lifshitz form (1935)

Landau and Lifshitz added a term along $\mathbf{H}_\perp$:

$$
\frac{\partial\mathbf{m}}{\partial t} = -\gamma_L\,\mathbf{m}\times\mathbf{H}_{\text{eff}} - \lambda\,\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}}), \qquad \lambda > 0
$$

Here λ has the same units as $\gamma_L$. Equivalently, $\partial\mathbf{m}/\partial t = -\gamma_L\,\mathbf{m}\times\mathbf{H}_{\text{eff}} + \lambda\,\mathbf{H}_\perp$.

### 5.1 Check: energy decreases

Insert into the energy formula. The precession term drops out because $\mathbf{H}_{\text{eff}}\cdot(\mathbf{m}\times\mathbf{H}_{\text{eff}}) = 0$. The damping term gives

$$
\frac{dE}{dt} = -\mu_0 M_s\lambda\int\mathbf{H}_{\text{eff}}\cdot\mathbf{H}_\perp\,dV = -\mu_0 M_s\lambda\int|\mathbf{H}_\perp|^2\,dV \;\le\; 0
$$

using $\mathbf{H}_{\text{eff}}\cdot\mathbf{H}_\perp = H_{\text{eff}}^2 - (\mathbf{m}\cdot\mathbf{H}_{\text{eff}})^2 = |\mathbf{H}_\perp|^2$.

### 5.2 Check: explicit example

Take $\mathbf{H}_{\text{eff}} = H\hat{\mathbf{z}}$ and $\mathbf{m} = (\sin\theta\cos\phi,\ \sin\theta\sin\phi,\ \cos\theta)$, evaluated at $\phi = 0$:

$$
\mathbf{m}\times\mathbf{H}_{\text{eff}} = H\,(0,\,-\sin\theta,\,0)
$$

$$
\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}}) = H\,(\sin\theta\cos\theta,\ 0,\ -\sin^2\theta)
$$

$$
\frac{d\mathbf{m}}{dt} = (\dot\theta\cos\theta,\ \dot\phi\sin\theta,\ -\dot\theta\sin\theta)
$$

Comparing components:

- y: $\dot\phi\sin\theta = \gamma_L H\sin\theta \;\Rightarrow\; \dot\phi = \gamma_L H$ (precession)
- z: $-\dot\theta\sin\theta = \lambda H\sin^2\theta \;\Rightarrow\; \dot\theta = -\lambda H\sin\theta$ (relaxation)

The x-component gives the same $\dot\theta$. Since $\dot\theta < 0$ for $0<\theta<\pi$, the angle to the field shrinks, as required.

### 5.3 The defect

The relaxation rate is $\lambda H$, which grows without bound as λ increases. Infinite friction producing infinitely fast motion is unphysical, so the LL form is only trustworthy for small damping.

## 6. Gilbert form (1955)

Gilbert introduced damping as a viscous force: a dissipative field proportional to the velocity of **m** and opposing it. Replace

$$
\mathbf{H}_{\text{eff}} \;\longrightarrow\; \mathbf{H}_{\text{eff}} - \frac{\alpha}{\gamma_0}\frac{\partial\mathbf{m}}{\partial t}, \qquad \alpha > 0
$$

in the undamped equation:

$$
\frac{\partial\mathbf{m}}{\partial t} = -\gamma_0\,\mathbf{m}\times\left(\mathbf{H}_{\text{eff}} - \frac{\alpha}{\gamma_0}\frac{\partial\mathbf{m}}{\partial t}\right)
$$

$$
\boxed{\;\frac{\partial\mathbf{m}}{\partial t} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}} + \alpha\,\mathbf{m}\times\frac{\partial\mathbf{m}}{\partial t}\;}
$$

This is the LLG equation in implicit (Gilbert) form. In terms of **M** it reads $d\mathbf{M}/dt = -\gamma_0\,\mathbf{M}\times\mathbf{H}_{\text{eff}} + (\alpha/M_s)\,\mathbf{M}\times d\mathbf{M}/dt$.

### 6.1 Solving for the time derivative

Write $\mathbf{v} = \partial\mathbf{m}/\partial t$ and $\mathbf{T} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}}$, so the equation is

$$
\mathbf{v} = \mathbf{T} + \alpha\,\mathbf{m}\times\mathbf{v}
$$

Step 1. Dot with **m**: both terms on the right are perpendicular to **m**, so $\mathbf{m}\cdot\mathbf{v} = 0$. The magnitude is still conserved.

Step 2. Cross with **m** from the left:

$$
\mathbf{m}\times\mathbf{v} = \mathbf{m}\times\mathbf{T} + \alpha\,\mathbf{m}\times(\mathbf{m}\times\mathbf{v})
$$

Step 3. Expand the double cross product, using $\mathbf{m}\cdot\mathbf{v} = 0$:

$$
\mathbf{m}\times(\mathbf{m}\times\mathbf{v}) = \mathbf{m}\,(\mathbf{m}\cdot\mathbf{v}) - \mathbf{v} = -\mathbf{v}
$$

$$
\mathbf{m}\times\mathbf{v} = \mathbf{m}\times\mathbf{T} - \alpha\,\mathbf{v}
$$

Step 4. Substitute this back into the original equation:

$$
\mathbf{v} = \mathbf{T} + \alpha\,\mathbf{m}\times\mathbf{T} - \alpha^2\mathbf{v}
$$

$$
\mathbf{v} = \frac{\mathbf{T} + \alpha\,\mathbf{m}\times\mathbf{T}}{1+\alpha^2}
$$

Step 5. Restore $\mathbf{T} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}}$:

$$
\boxed{\;\frac{\partial\mathbf{m}}{\partial t} = -\frac{\gamma_0}{1+\alpha^2}\,\mathbf{m}\times\mathbf{H}_{\text{eff}} - \frac{\alpha\gamma_0}{1+\alpha^2}\,\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}})\;}
$$

This is the explicit form, the one integrated numerically. The damping term carries the minus sign that section 4 requires.

## 7. Equivalence of the two forms

The explicit Gilbert form has exactly the Landau–Lifshitz structure, with

$$
\gamma_L = \frac{\gamma_0}{1+\alpha^2}, \qquad \lambda = \frac{\alpha\gamma_0}{1+\alpha^2}
$$

and conversely

$$
\alpha = \frac{\lambda}{\gamma_L}, \qquad \gamma_0 = \gamma_L\,(1+\alpha^2)
$$

The two equations are mathematically equivalent but treat the constants differently:

| | Landau–Lifshitz (fixed $\gamma_L$, vary λ) | Gilbert (fixed $\gamma_0$, vary α) |
| --- | --- | --- |
| Precession rate | $\gamma_L H$, independent of damping | $\gamma_0 H/(1+\alpha^2)$, slowed by damping |
| Relaxation rate | $\lambda H$, unbounded | $\alpha\gamma_0 H/(1+\alpha^2)$, maximal at α = 1 |
| Strong-damping limit | Infinitely fast relaxation | Motion freezes |

For $\alpha\ll1$ they agree to first order in α. Gilbert's form is preferred because its large-damping behaviour is physical and α is dimensionless.

## 8. Energy dissipation

From the implicit form, $\partial\mathbf{m}/\partial t = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{tot}}$ with $\mathbf{H}_{\text{tot}} = \mathbf{H}_{\text{eff}} - (\alpha/\gamma_0)\,\partial\mathbf{m}/\partial t$. A cross product is perpendicular to its factors, so

$$
\frac{\partial\mathbf{m}}{\partial t}\cdot\mathbf{H}_{\text{tot}} = 0 \quad\Rightarrow\quad \mathbf{H}_{\text{eff}}\cdot\frac{\partial\mathbf{m}}{\partial t} = \frac{\alpha}{\gamma_0}\left|\frac{\partial\mathbf{m}}{\partial t}\right|^2
$$

Insert into the energy formula of section 3:

$$
\frac{dE}{dt} = -\frac{\alpha\mu_0 M_s}{\gamma_0}\int\left|\frac{\partial\mathbf{m}}{\partial t}\right|^2 dV \;\le\; 0
$$

The loss rate is proportional to the squared velocity, as for viscous friction. The two terms of the explicit form are mutually perpendicular and each has magnitude proportional to $|\mathbf{H}_\perp|$, so $|\partial\mathbf{m}/\partial t|^2 = \gamma_0^2|\mathbf{H}_\perp|^2/(1+\alpha^2)$ and

$$
\frac{dE}{dt} = -\frac{\alpha\gamma_0\mu_0 M_s}{1+\alpha^2}\int|\mathbf{H}_\perp|^2\,dV
$$

The energy falls monotonically until $\mathbf{H}_\perp = 0$, that is, until **m** is parallel to $\mathbf{H}_{\text{eff}}$ everywhere.

## 9. Exact solution in a uniform static field

With $\mathbf{H}_{\text{eff}} = H\hat{\mathbf{z}}$, the component comparison of section 5.2 applied to the explicit form gives

$$
\dot\phi = \frac{\gamma_0 H}{1+\alpha^2}, \qquad \dot\theta = -\frac{\alpha\gamma_0 H}{1+\alpha^2}\sin\theta
$$

Integrating:

$$
\phi(t) = \phi_0 + \frac{\gamma_0 H}{1+\alpha^2}\,t, \qquad \tan\frac{\theta(t)}{2} = \tan\frac{\theta_0}{2}\;e^{-t/\tau}, \qquad \tau = \frac{1+\alpha^2}{\alpha\gamma_0 H}
$$

**m** spirals in toward the field.

- **Small damping, $\alpha\ll1$:** $\tau\approx1/(\alpha\gamma_0H)$. About $1/(2\pi\alpha)$ precession turns occur per relaxation time.
- **Large damping, $\alpha\gg1$:** precession rate $\approx\gamma_0H/\alpha^2$ and relaxation rate $\approx\gamma_0H/\alpha$. The motion is almost purely relaxational and slow.
- **Fastest relaxation:** τ is minimal at α = 1, where $\tau = 2/(\gamma_0H)$.

## 10. Current-induced torques

A spin current polarized along the unit vector **p** adds two torques:

$$
\frac{\partial\mathbf{m}}{\partial t} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}} + \alpha\,\mathbf{m}\times\frac{\partial\mathbf{m}}{\partial t} - \gamma_0 a_J\,\mathbf{m}\times(\mathbf{m}\times\mathbf{p}) - \gamma_0 b_J\,\mathbf{m}\times\mathbf{p}
$$

- **Damping-like (Slonczewski) torque,** strength $a_J$ in A/m. Since $-\mathbf{m}\times(\mathbf{m}\times\mathbf{p}) = \mathbf{p} - \mathbf{m}(\mathbf{m}\cdot\mathbf{p})$, it pushes **m** toward **p** for $a_J>0$. Depending on current direction it adds to or opposes the Gilbert damping.
- **Field-like torque,** strength $b_J$ in A/m. It acts like an extra field $b_J\mathbf{p}$.

The same two forms describe spin-transfer torque and spin–orbit torque; only the expressions for $a_J$, $b_J$ and **p** differ. Sign conventions for these coefficients vary between papers and codes.

## 11. Summary

| Step | Result |
| --- | --- |
| Torque | $\boldsymbol{\tau} = \mu_0\,\boldsymbol{\mu}\times\mathbf{H}$ |
| Gyromagnetic relation | $\boldsymbol{\mu} = -\gamma\mathbf{L}$ |
| Undamped precession | $\partial_t\mathbf{m} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}}$ |
| Landau–Lifshitz | $\partial_t\mathbf{m} = -\gamma_L\,\mathbf{m}\times\mathbf{H}_{\text{eff}} - \lambda\,\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}})$ |
| Gilbert (implicit) | $\partial_t\mathbf{m} = -\gamma_0\,\mathbf{m}\times\mathbf{H}_{\text{eff}} + \alpha\,\mathbf{m}\times\partial_t\mathbf{m}$ |
| Gilbert (explicit) | $\partial_t\mathbf{m} = -\dfrac{\gamma_0}{1+\alpha^2}\left[\mathbf{m}\times\mathbf{H}_{\text{eff}} + \alpha\,\mathbf{m}\times(\mathbf{m}\times\mathbf{H}_{\text{eff}})\right]$ |
| Mapping | $\gamma_L = \gamma_0/(1+\alpha^2)$, $\lambda = \alpha\gamma_0/(1+\alpha^2)$ |
| Dissipation | $dE/dt = -(\alpha\mu_0M_s/\gamma_0)\int\lvert\partial_t\mathbf{m}\rvert^2\,dV\le 0$ |

## 12. Limits of validity

- $|\mathbf{m}| = 1$ is fixed, so longitudinal relaxation near the Curie temperature is not described; that needs the Landau–Lifshitz–Bloch equation.
- There are no thermal fluctuations; those need the stochastic LLG equation with a random field.
- Damping is local, scalar and instantaneous. Non-local, tensorial or inertial damping require extra terms.