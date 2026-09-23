I'll derive the Landau-Lifshitz-Gilbert (LLG) equation from absolute first principles, line by line, with no steps skipped. This is the fundamental equation of micromagnetics.

---

## 1. The Starting Point: A Magnetic Moment in a Field

Consider a single magnetic moment $\boldsymbol{\mu}$ placed in an external magnetic field $\mathbf{H}$. From classical electromagnetism, the **potential energy** of this moment is:

$$U = -\boldsymbol{\mu} \cdot \mathbf{H}$$

The **torque** $\boldsymbol{\tau}$ acting on the moment is defined as the gradient of this energy with respect to orientation:

$$\boldsymbol{\tau} = -\frac{\partial U}{\partial \boldsymbol{\theta}} = \boldsymbol{\mu} \times \mathbf{H}$$

This is the fundamental torque equation. The cross product tells us the torque is perpendicular to both $\boldsymbol{\mu}$ and $\mathbf{H}$, and it tries to align $\boldsymbol{\mu}$ with $\mathbf{H}$.

---

## 2. Connecting Torque to Angular Momentum

From classical mechanics, torque equals the time derivative of angular momentum $\mathbf{L}$:

$$\boldsymbol{\tau} = \frac{d\mathbf{L}}{dt}$$

In quantum mechanics (and semiclassically for macrospins), the magnetic moment is proportional to the angular momentum via the **gyromagnetic ratio** $\gamma$:

$$\boldsymbol{\mu} = \gamma \mathbf{L}$$

**Important sign convention**: For electrons, the magnetic moment is **opposite** to the angular momentum because the charge is negative. Therefore:

$$\gamma = -\frac{g_e e}{2m_e} < 0$$

where $g_e \approx 2.0023$ is the electron g-factor, $e > 0$ is the elementary charge, and $m_e$ is the electron mass. Numerically:

$$\gamma \approx -1.76086 \times 10^{11} \,\text{rad}\cdot\text{s}^{-1}\cdot\text{T}^{-1}$$

Some texts define $\gamma_0 = |\gamma|$ and carry the minus sign explicitly. I will keep $\gamma$ as the negative quantity.

---

## 3. The Undamped Equation of Motion

Substitute $\boldsymbol{\mu} = \gamma \mathbf{L}$ into the torque equation:

$$\frac{d\mathbf{L}}{dt} = \boldsymbol{\mu} \times \mathbf{H} = \gamma \mathbf{L} \times \mathbf{H}$$

Now define the **magnetization** $\mathbf{M}$ as magnetic moment per unit volume:

$$\mathbf{M} = \frac{\boldsymbol{\mu}}{V}$$

Dividing the torque equation by volume $V$:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}$$

This is the **undamped Landau-Lifshitz equation**. Let's examine what it implies.

### 3.1. Conservation of Magnitude

Take the dot product of both sides with $\mathbf{M}$:

$$\mathbf{M} \cdot \frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \cdot (\mathbf{M} \times \mathbf{H}) = 0$$

The right side is zero because $\mathbf{M} \times \mathbf{H}$ is perpendicular to $\mathbf{M}$. Therefore:

$$\frac{d}{dt}(\mathbf{M} \cdot \mathbf{M}) = 0 \implies |\mathbf{M}| = M_s = \text{constant}$$

where $M_s$ is the **saturation magnetization**. The magnetization vector precesses on a sphere of radius $M_s$.

### 3.2. Precession Frequency

The equation $\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}$ describes **Larmor precession**. The vector $\mathbf{M}$ rotates around $\mathbf{H}$ at angular frequency:

$$\omega_0 = |\gamma| H$$

The direction of precession depends on the sign of $\gamma$. For electrons ($\gamma < 0$), the precession is **right-handed** about $\mathbf{H}$.

---

## 4. The Effective Field

In real ferromagnets, $\mathbf{M}$ doesn't just respond to external fields. It responds to the **effective field** $\mathbf{H}_{\text{eff}}$, derived from the total free energy density $\mathcal{E}$:

$$\mathbf{H}_{\text{eff}} = -\frac{1}{\mu_0 M_s} \frac{\delta \mathcal{E}}{\delta \mathbf{m}}$$

where $\mathbf{m} = \mathbf{M}/M_s$ is the **unit magnetization vector** ($|\mathbf{m}| = 1$).

The total energy $\mathcal{E}$ typically includes:
- **Exchange energy**: $\mathcal{E}_{\text{ex}} = A (\nabla \mathbf{m})^2$ (favors parallel alignment)
- **Anisotropy energy**: $\mathcal{E}_{\text{anis}} = K (1 - (\mathbf{m} \cdot \hat{\mathbf{n}})^2)$ (favors easy axis)
- **Zeeman energy**: $\mathcal{E}_{\text{Z}} = -\mu_0 M_s \mathbf{m} \cdot \mathbf{H}_{\text{ext}}$ (favors alignment with external field)
- **Demagnetization energy**: $\mathcal{E}_{\text{demag}} = -\frac{1}{2}\mu_0 M_s \mathbf{m} \cdot \mathbf{H}_{\text{d}}$ (shape-dependent)

So the undamped equation becomes:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}$$

---

## 5. The Problem: No Damping

The undamped equation describes perpetual precession. In reality, magnetic moments **relax** toward equilibrium (aligned with $\mathbf{H}_{\text{eff}}$). Energy must be dissipated to the lattice (phonons).

Physically, damping arises from:
- Spin-orbit coupling
- Scattering with phonons, magnons, conduction electrons
- Radiation of electromagnetic waves

We need a **damping term** that:
1. Reduces the energy $E = -\boldsymbol{\mu} \cdot \mathbf{H}_{\text{eff}}$
2. Preserves the magnitude $|\mathbf{M}| = M_s$
3. Pushes $\mathbf{M}$ toward $\mathbf{H}_{\text{eff}}$

---

## 6. The Landau-Lifshitz Form (1935)

Landau and Lifshitz proposed adding a damping term proportional to the component of $\mathbf{M}$ perpendicular to $\mathbf{H}_{\text{eff}}$. Define:

$$\mathbf{M} = M_s \mathbf{m}, \quad |\mathbf{m}| = 1$$

The **Landau-Lifshitz (LL) equation** is:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

where $\lambda > 0$ is the **Landau-Lifshitz damping parameter**.

### 6.1. Line-by-Line Analysis of the Damping Term

Let's analyze the damping term:

$$\mathbf{T}_{\text{damp}} = \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

Use the vector triple product identity:

$$\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = \mathbf{b}(\mathbf{a} \cdot \mathbf{c}) - \mathbf{c}(\mathbf{a} \cdot \mathbf{b})$$

Set $\mathbf{a} = \mathbf{M}$, $\mathbf{b} = \mathbf{M}$, $\mathbf{c} = \mathbf{H}_{\text{eff}}$:

$$\mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) = \mathbf{M}(\mathbf{M} \cdot \mathbf{H}_{\text{eff}}) - \mathbf{H}_{\text{eff}}(\mathbf{M} \cdot \mathbf{M})$$

$$= \mathbf{M}(\mathbf{M} \cdot \mathbf{H}_{\text{eff}}) - M_s^2 \mathbf{H}_{\text{eff}}$$

So:

$$\mathbf{T}_{\text{damp}} = \frac{\lambda}{M_s^2} \left[ \mathbf{M}(\mathbf{M} \cdot \mathbf{H}_{\text{eff}}) - M_s^2 \mathbf{H}_{\text{eff}} \right]$$

$$= \lambda \left[ \frac{\mathbf{M}(\mathbf{M} \cdot \mathbf{H}_{\text{eff}})}{M_s^2} - \mathbf{H}_{\text{eff}} \right]$$

$$= -\lambda \left[ \mathbf{H}_{\text{eff}} - \mathbf{m}(\mathbf{m} \cdot \mathbf{H}_{\text{eff}}) \right]$$

$$= -\lambda \mathbf{H}_{\text{eff}}^{\perp}$$

where $\mathbf{H}_{\text{eff}}^{\perp} = \mathbf{H}_{\text{eff}} - \mathbf{m}(\mathbf{m} \cdot \mathbf{H}_{\text{eff}})$ is the component of $\mathbf{H}_{\text{eff}}$ **perpendicular** to $\mathbf{M}$.

### 6.2. Why This Damps the Motion

The damping term points in the direction $-\mathbf{H}_{\text{eff}}^{\perp}$, which is exactly the direction that pushes $\mathbf{M}$ toward $\mathbf{H}_{\text{eff}}$ while staying on the sphere $|\mathbf{M}| = M_s$.

To verify energy dissipation, compute:

$$\frac{dE}{dt} = -\mu_0 M_s \mathbf{H}_{\text{eff}} \cdot \frac{d\mathbf{m}}{dt}$$

(using $E = -\boldsymbol{\mu} \cdot \mathbf{H}_{\text{eff}}$ and $\boldsymbol{\mu} = \mu_0 V \mathbf{M}$ in SI units).

The precession term $\gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}$ is perpendicular to $\mathbf{H}_{\text{eff}}$, so it doesn't change the energy. Only the damping term contributes:

$$\frac{dE}{dt} \propto -\mathbf{H}_{\text{eff}} \cdot \mathbf{T}_{\text{damp}} = -\lambda \mathbf{H}_{\text{eff}} \cdot \left[ \frac{\mathbf{M}(\mathbf{M} \cdot \mathbf{H}_{\text{eff}})}{M_s^2} - \mathbf{H}_{\text{eff}} \right]$$

$$= -\lambda \left[ \frac{(\mathbf{M} \cdot \mathbf{H}_{\text{eff}})^2}{M_s^2} - H_{\text{eff}}^2 \right]$$

$$= \lambda \left[ H_{\text{eff}}^2 - \frac{(\mathbf{M} \cdot \mathbf{H}_{\text{eff}})^2}{M_s^2} \right]$$

$$= \lambda |\mathbf{H}_{\text{eff}}^{\perp}|^2 \geq 0$$

Wait — this gives $dE/dt \geq 0$? Let me check the sign. Actually, the energy should decrease. The issue is the sign convention for $E$. If $E = -\mu_0 M_s \mathbf{m} \cdot \mathbf{H}_{\text{eff}}$, then:

$$\frac{dE}{dt} = -\mu_0 M_s \mathbf{H}_{\text{eff}} \cdot \frac{d\mathbf{m}}{dt} - \mu_0 M_s \mathbf{m} \cdot \frac{d\mathbf{H}_{\text{eff}}}{dt}$$

Assuming $\mathbf{H}_{\text{eff}}$ is constant:

$$\frac{dE}{dt} = -\mu_0 M_s \mathbf{H}_{\text{eff}} \cdot \frac{d\mathbf{m}}{dt}$$

Now $\frac{d\mathbf{m}}{dt} = \frac{1}{M_s}\frac{d\mathbf{M}}{dt}$, so:

$$\frac{dE}{dt} = -\mu_0 \mathbf{H}_{\text{eff}} \cdot \left[ \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) \right]$$

The first term: $\mathbf{H}_{\text{eff}} \cdot (\mathbf{M} \times \mathbf{H}_{\text{eff}}) = 0$.

The second term:

$$-\mu_0 \mathbf{H}_{\text{eff}} \cdot \left[ \frac{\lambda}{M_s^2} (\mathbf{M}(\mathbf{M}\cdot\mathbf{H}_{\text{eff}}) - M_s^2 \mathbf{H}_{\text{eff}}) \right]$$

$$= -\frac{\mu_0 \lambda}{M_s^2} \left[ (\mathbf{M}\cdot\mathbf{H}_{\text{eff}})^2 - M_s^2 H_{\text{eff}}^2 \right]$$

$$= \frac{\mu_0 \lambda}{M_s^2} \left[ M_s^2 H_{\text{eff}}^2 - (\mathbf{M}\cdot\mathbf{H}_{\text{eff}})^2 \right]$$

$$= \mu_0 \lambda \left[ H_{\text{eff}}^2 - (\mathbf{m}\cdot\mathbf{H}_{\text{eff}})^2 \right]$$

$$= \mu_0 \lambda |\mathbf{H}_{\text{eff}}^{\perp}|^2 \geq 0$$

But energy should decrease! The resolution is that the equilibrium state has $\mathbf{M}$ **parallel** to $\mathbf{H}_{\text{eff}}$, which minimizes $E = -\mu_0 M_s \mathbf{m} \cdot \mathbf{H}_{\text{eff}}$. When $\mathbf{M}$ moves toward $\mathbf{H}_{\text{eff}}$, the dot product $\mathbf{m} \cdot \mathbf{H}_{\text{eff}}$ increases (becomes less negative if $\gamma < 0$), so $E$ becomes more negative, meaning $E$ decreases.

Actually, I need to be more careful. Let's say $\mathbf{H}_{\text{eff}}$ points in the $+z$ direction. Then $E = -\mu_0 M_s H_{\text{eff}} m_z$. The minimum energy is at $m_z = +1$. The damping term pushes $\mathbf{M}$ toward $+z$, so $m_z$ increases, $E$ decreases (becomes more negative).

But my calculation gave $dE/dt \geq 0$. The error is that I defined $E$ with the wrong sign for the torque derivation. Let me use the proper micromagnetic energy functional:

$$\mathcal{E} = -\mu_0 \int \mathbf{M} \cdot \mathbf{H}_{\text{eff}} \, dV$$

Actually, the standard definition is that $\mathbf{H}_{\text{eff}} = -\frac{1}{\mu_0}\frac{\delta \mathcal{E}}{\delta \mathbf{M}}$, so:

$$\frac{d\mathcal{E}}{dt} = \int \frac{\delta \mathcal{E}}{\delta \mathbf{M}} \cdot \frac{\partial \mathbf{M}}{\partial t} \, dV = -\mu_0 \int \mathbf{H}_{\text{eff}} \cdot \frac{\partial \mathbf{M}}{\partial t} \, dV$$

Now substitute the LL equation:

$$\frac{d\mathcal{E}}{dt} = -\mu_0 \int \mathbf{H}_{\text{eff}} \cdot \left[ \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) \right] dV$$

First term: $\mathbf{H}_{\text{eff}} \cdot (\mathbf{M} \times \mathbf{H}_{\text{eff}}) = 0$.

Second term:

$$-\frac{\mu_0 \lambda}{M_s^2} \mathbf{H}_{\text{eff}} \cdot [\mathbf{M}(\mathbf{M}\cdot\mathbf{H}_{\text{eff}}) - M_s^2 \mathbf{H}_{\text{eff}}]$$

$$= -\frac{\mu_0 \lambda}{M_s^2} [(\mathbf{M}\cdot\mathbf{H}_{\text{eff}})^2 - M_s^2 H_{\text{eff}}^2]$$

$$= \mu_0 \lambda [H_{\text{eff}}^2 - (\mathbf{m}\cdot\mathbf{H}_{\text{eff}})^2]$$

$$= \mu_0 \lambda |\mathbf{H}_{\text{eff}}^{\perp}|^2 \geq 0$$

So $d\mathcal{E}/dt \geq 0$? But energy should decrease as the system approaches equilibrium...

Ah, I see the confusion. In the LL equation, if $\gamma < 0$, the precession direction matters. Let me think about this more carefully.

Actually, the issue is simpler: the damping term as written **does** cause energy decrease, but my sign convention for $\mathcal{E}$ might be flipped. In many texts, the energy decreases because the damping term is constructed to do so. Let me verify with a concrete example.

Suppose $\mathbf{H}_{\text{eff}} = H_0 \hat{\mathbf{z}}$, and $\mathbf{M}$ is tilted slightly: $\mathbf{M} = M_s(\sin\theta, 0, \cos\theta)$ with small $\theta > 0$.

Then $\mathbf{M} \times \mathbf{H}_{\text{eff}} = M_s H_0 (\sin\theta, 0, \cos\theta) \times (0, 0, 1) = M_s H_0 (\sin\theta \cdot 0 - \cos\theta \cdot 0, \cos\theta \cdot 0 - \sin\theta \cdot 1, \sin\theta \cdot 0 - 0 \cdot 0) = M_s H_0 (0, -\sin\theta, 0)$

Wait: $(a,b,c) \times (0,0,1) = (b\cdot 1 - c\cdot 0, c\cdot 0 - a\cdot 1, a\cdot 0 - b\cdot 0) = (b, -a, 0)$.

So $\mathbf{M} \times \mathbf{H}_{\text{eff}} = M_s H_0 (0, -\sin\theta, 0)$.

And $\mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) = M_s^2 H_0 (\sin\theta, 0, \cos\theta) \times (0, -\sin\theta, 0) = M_s^2 H_0 (\cos\theta \cdot (-\sin\theta) - 0 \cdot 0, 0 \cdot 0 - \sin\theta \cdot 0, \sin\theta \cdot (-\sin\theta) - 0 \cdot 0) = M_s^2 H_0 (-\sin\theta\cos\theta, 0, -\sin^2\theta)$

Wait, let me recalculate: $(a,b,c) \times (d,e,f) = (bf-ce, cd-af, ae-bd)$.

So $(\sin\theta, 0, \cos\theta) \times (0, -\sin\theta, 0) = (0\cdot 0 - \cos\theta \cdot (-\sin\theta), \cos\theta \cdot 0 - \sin\theta \cdot 0, \sin\theta \cdot (-\sin\theta) - 0 \cdot 0) = (\sin\theta\cos\theta, 0, -\sin^2\theta)$.

So $\mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) = M_s^2 H_0 (\sin\theta\cos\theta, 0, -\sin^2\theta)$.

The LL equation gives:

$$\frac{d\mathbf{M}}{dt} = \gamma M_s H_0 (0, -\sin\theta, 0) + \lambda H_0 (\sin\theta\cos\theta, 0, -\sin^2\theta)$$

In spherical coordinates for $\mathbf{m} = (\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$, with $\phi = 0$:

$$\frac{d\mathbf{M}}{dt} = M_s \frac{d\mathbf{m}}{dt} = M_s (\dot{\theta}\cos\theta, 0, -\dot{\theta}\sin\theta)$$

Comparing components:
- $x$: $M_s \dot{\theta}\cos\theta = \lambda H_0 \sin\theta\cos\theta \implies \dot{\theta} = \frac{\lambda H_0}{M_s} \sin\theta$
- $y$: $0 = -\gamma M_s H_0 \sin\theta$ (This should give precession in $\phi$, but with $\phi=0$ initially, we need to be careful)
- $z$: $-M_s \dot{\theta}\sin\theta = -\lambda H_0 \sin^2\theta \implies \dot{\theta} = \frac{\lambda H_0}{M_s} \sin\theta$

So $\dot{\theta} = \frac{\lambda H_0}{M_s} \sin\theta > 0$ for small $\theta$. This means $\theta$ **increases**, not decreases! The magnetization moves **away** from the field!

This reveals a critical sign error in my analysis. The standard LL equation actually has the damping term with a **negative** sign in some conventions, or the definition of $\lambda$ absorbs the sign.

Let me check the standard form. The original Landau-Lifshitz equation is:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

But with $\gamma < 0$, the precession is in one direction, and the damping should push toward alignment. In my calculation, with $\lambda > 0$, the damping pushes away. This means either:
1. $\lambda$ should have the opposite sign, or
2. The damping term should have a minus sign.

Actually, looking at standard references, the LL damping term is often written as:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

Or equivalently, with $\gamma < 0$ and $\lambda > 0$, the term as originally written by Landau and Lifshitz has $\lambda$ as a phenomenological parameter that could be negative, or the cross product is evaluated differently.

Let me be very precise. The **Gilbert** form is more commonly used today, and it avoids this ambiguity. But to be historically accurate, Landau and Lifshitz wrote:

$$\frac{d\mathbf{M}}{dt} = \gamma [\mathbf{M} \times \mathbf{H}_{\text{eff}}] + \frac{\lambda}{M^2} [\mathbf{M} \times [\mathbf{M} \times \mathbf{H}_{\text{eff}}]]$$

where $\lambda$ is a damping constant. In their original paper, $\gamma$ was taken as positive (they considered the magnitude), and the damping term indeed causes relaxation toward equilibrium with the correct choice of $\lambda > 0$ when the full vector algebra is done carefully with the proper sign of $\gamma$.

Actually, the resolution is that in the original LL paper, they used $\gamma = g|e|/2mc > 0$ (the magnitude), and wrote:

$$\frac{d\mathbf{M}}{dt} = -\gamma \mathbf{M} \times \mathbf{H} + \frac{\lambda}{M^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H})$$

with the minus sign explicitly included for the electron's negative charge. In modern notation, we absorb the minus sign into $\gamma < 0$, so:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

with $\gamma < 0$ and $\lambda > 0$. But my calculation showed this pushes $\mathbf{M}$ away from $\mathbf{H}$. Let me recheck the cross product.

$\mathbf{M} = M_s(\sin\theta, 0, \cos\theta)$, $\mathbf{H} = H_0(0,0,1)$.

$\mathbf{M} \times \mathbf{H} = M_s H_0 (\sin\theta, 0, \cos\theta) \times (0,0,1) = M_s H_0 (0\cdot 1 - \cos\theta \cdot 0, \cos\theta \cdot 0 - \sin\theta \cdot 1, \sin\theta \cdot 0 - 0 \cdot 0) = M_s H_0 (0, -\sin\theta, 0)$.

So $\gamma \mathbf{M} \times \mathbf{H} = \gamma M_s H_0 (0, -\sin\theta, 0)$. With $\gamma < 0$, this is $(0, |\gamma| M_s H_0 \sin\theta, 0)$, which is in the $+y$ direction.

Now $\mathbf{M} \times (\mathbf{M} \times \mathbf{H}) = M_s^2 H_0 (\sin\theta\cos\theta, 0, -\sin^2\theta)$ as calculated.

The $z$-component of the full equation:
$$\frac{dM_z}{dt} = 0 + \frac{\lambda}{M_s^2} (-M_s^2 H_0 \sin^2\theta) = -\lambda H_0 \sin^2\theta$$

Since $M_z = M_s \cos\theta$, we have $\frac{dM_z}{dt} = -M_s \sin\theta \frac{d\theta}{dt}$.

So:
$$-M_s \sin\theta \frac{d\theta}{dt} = -\lambda H_0 \sin^2\theta$$

$$\frac{d\theta}{dt} = \frac{\lambda H_0}{M_s} \sin\theta$$

For small $\theta > 0$, $d\theta/dt > 0$, so $\theta$ increases. This means $M_z = M_s \cos\theta$ decreases. The magnetization moves away from the $+z$ axis!

This is clearly wrong. The issue is that $\mathbf{M} \times (\mathbf{M} \times \mathbf{H})$ points in the direction that pushes $\mathbf{M}$ away from $\mathbf{H}$, not toward it.

Wait, let me visualize. $\mathbf{M}$ is at angle $\theta$ from $z$. $\mathbf{M} \times \mathbf{H}$ is perpendicular to both, in the $-y$ direction (for $\gamma > 0$ convention). Then $\mathbf{M} \times (\mathbf{M} \times \mathbf{H})$ is perpendicular to $\mathbf{M}$ and $(\mathbf{M} \times \mathbf{H})$. Using the right-hand rule, this points in the plane containing $\mathbf{M}$ and $\mathbf{H}$, perpendicular to $\mathbf{M}$, toward the $-z$ direction (away from $\mathbf{H}$ for small $\theta$).

Yes! The vector triple product $\mathbf{M} \times (\mathbf{M} \times \mathbf{H})$ points in the direction $-\mathbf{H}_{\perp}$, which is away from $\mathbf{H}$. So to get damping (pushing toward $\mathbf{H}$), we need a **minus sign**:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

This is the correct form! Many texts write it this way, or define $\lambda$ with the appropriate sign. Let me verify with the $z$-component:

$$\frac{dM_z}{dt} = 0 - \frac{\lambda}{M_s^2} (-M_s^2 H_0 \sin^2\theta) = +\lambda H_0 \sin^2\theta$$

$$-M_s \sin\theta \frac{d\theta}{dt} = \lambda H_0 \sin^2\theta$$

$$\frac{d\theta}{dt} = -\frac{\lambda H_0}{M_s} \sin\theta$$

Now for small $\theta > 0$, $d\theta/dt < 0$, so $\theta$ decreases. $M_z$ increases. The magnetization aligns with the field. Correct!

So the **correct Landau-Lifshitz equation** is:

$$\boxed{\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})}$$

with $\gamma < 0$ and $\lambda > 0$.

---

## 7. The Gilbert Form (1955)

T.L. Gilbert proposed an alternative formulation that is more physically motivated and mathematically elegant. Instead of adding a damping torque, Gilbert introduced a **damped dynamics** by modifying the fundamental relation between angular momentum and torque.

Recall the undamped equation:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}$$

Gilbert proposed that the **effective field** seen by the precessing moment is not just $\mathbf{H}_{\text{eff}}$, but includes a term proportional to the rate of change of magnetization:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \left( \mathbf{H}_{\text{eff}} - \frac{\alpha}{\gamma M_s} \frac{d\mathbf{M}}{dt} \right)$$

where $\alpha > 0$ is the **dimensionless Gilbert damping parameter**.

### 7.1. Expanding the Gilbert Form

Distribute the cross product:

$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\alpha}{M_s} \mathbf{M} \times \frac{d\mathbf{M}}{dt}$$

This is the **Gilbert equation**. Notice that the damping term is proportional to $\mathbf{M} \times \frac{d\mathbf{M}}{dt}$, not $\mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$. The damping depends on the velocity of the magnetization, which is more physically intuitive (like viscous damping).

### 7.2. Solving for $\frac{d\mathbf{M}}{dt}$

The Gilbert equation is **implicit** — the derivative appears on both sides. We need to solve for $\frac{d\mathbf{M}}{dt}$ explicitly.

Write:

$$\frac{d\mathbf{M}}{dt} + \frac{\alpha}{M_s} \mathbf{M} \times \frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}$$

This is a vector equation of the form:

$$\mathbf{v} + \frac{\alpha}{M_s} \mathbf{M} \times \mathbf{v} = \mathbf{T}$$

where $\mathbf{v} = \frac{d\mathbf{M}}{dt}$ and $\mathbf{T} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}$.

To solve for $\mathbf{v}$, we use a standard vector identity. For any vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ with $\mathbf{b} = \mathbf{M}$ and $|\mathbf{m}| = 1$:

If $\mathbf{v} + \eta \mathbf{m} \times \mathbf{v} = \mathbf{T}$, then taking the cross product with $\mathbf{m}$:

$$\mathbf{m} \times \mathbf{v} + \eta \mathbf{m} \times (\mathbf{m} \times \mathbf{v}) = \mathbf{m} \times \mathbf{T}$$

$$\mathbf{m} \times \mathbf{v} + \eta [\mathbf{m}(\mathbf{m}\cdot\mathbf{v}) - \mathbf{v}] = \mathbf{m} \times \mathbf{T}$$

Since $|\mathbf{M}| = M_s$ is constant, $\mathbf{M} \cdot \frac{d\mathbf{M}}{dt} = 0$, so $\mathbf{m} \cdot \mathbf{v} = 0$. Thus:

$$\mathbf{m} \times \mathbf{v} - \eta \mathbf{v} = \mathbf{m} \times \mathbf{T}$$

From the original equation: $\mathbf{m} \times \mathbf{v} = \frac{1}{\eta}(\mathbf{T} - \mathbf{v})$. Substitute:

$$\frac{1}{\eta}(\mathbf{T} - \mathbf{v}) - \eta \mathbf{v} = \mathbf{m} \times \mathbf{T}$$

$$\frac{1}{\eta}\mathbf{T} - \frac{1}{\eta}\mathbf{v} - \eta \mathbf{v} = \mathbf{m} \times \mathbf{T}$$

$$\mathbf{T} - (1 + \eta^2)\mathbf{v} = \eta \mathbf{m} \times \mathbf{T}$$

$$(1 + \eta^2)\mathbf{v} = \mathbf{T} - \eta \mathbf{m} \times \mathbf{T}$$

$$\mathbf{v} = \frac{1}{1+\eta^2} [\mathbf{T} - \eta \mathbf{m} \times \mathbf{T}]$$

With $\eta = \alpha$ (since we have $\frac{\alpha}{M_s} \mathbf{M} \times \mathbf{v} = \alpha \mathbf{m} \times \mathbf{v}$, so $\eta = \alpha$):

$$\frac{d\mathbf{M}}{dt} = \frac{1}{1+\alpha^2} \left[ \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \alpha \mathbf{m} \times (\gamma \mathbf{M} \times \mathbf{H}_{\text{eff}}) \right]$$

$$= \frac{\gamma}{1+\alpha^2} \left[ \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\alpha}{M_s} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}}) \right]$$

$$= \frac{\gamma}{1+\alpha^2} \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\gamma \alpha}{M_s(1+\alpha^2)} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

This is the **explicit Gilbert equation**.

---

## 8. Equivalence of LL and Gilbert Forms

Compare the explicit Gilbert form with the Landau-Lifshitz form:

**Landau-Lifshitz:**
$$\frac{d\mathbf{M}}{dt} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\lambda}{M_s^2} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

**Gilbert (explicit):**
$$\frac{d\mathbf{M}}{dt} = \frac{\gamma}{1+\alpha^2} \mathbf{M} \times \mathbf{H}_{\text{eff}} - \frac{\gamma \alpha}{M_s(1+\alpha^2)} \mathbf{M} \times (\mathbf{M} \times \mathbf{H}_{\text{eff}})$$

These are mathematically equivalent if we identify:

$$\gamma_{\text{LL}} = \frac{\gamma}{1+\alpha^2}$$

$$\lambda = \frac{|\gamma| \alpha M_s}{1+\alpha^2}$$

Or conversely:

$$\gamma = \gamma_{\text{LL}}(1+\alpha^2)$$

$$\alpha = \frac{\lambda}{|\gamma_{\text{LL}}| M_s}$$

### 8.1. Physical Interpretation of the Renormalization

In the Gilbert form, the **gyromagnetic ratio is renormalized** by damping:
- The **bare** gyromagnetic ratio $\gamma$ appears in the Gilbert equation
- The **effective** gyromagnetic ratio $\gamma_{\text{LL}} = \gamma/(1+\alpha^2)$ appears in the LL form

As $\alpha \to 0$ (no damping), $\gamma_{\text{LL}} \to \gamma$.
As $\alpha \to \infty$ (strong damping), $\gamma_{\text{LL}} \to 0$: precession is completely suppressed.

In the Gilbert form, even with large $\alpha$, the precession frequency is reduced but the **bare** $\gamma$ remains unchanged in the equation structure. The Gilbert form is preferred because:
1. $\alpha$ is dimensionless and directly measurable (typically $0.001$ to $0.1$)
2. The damping is clearly a perturbation on the precession
3. It generalizes more naturally to stochastic dynamics (LLB equation)

---

## 9. The Standard LLG Equation (Modern Form)

The modern convention combines both forms and writes the **Landau-Lifshitz-Gilbert equation** as:

$$\boxed{\frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}}$$

or equivalently:

$$\frac{\partial \mathbf{m}}{\partial t} = -\frac{\gamma_0}{1+\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\alpha \gamma_0}{1+\alpha^2} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

where:
- $\mathbf{m} = \mathbf{M}/M_s$ is the unit magnetization vector
- $\gamma_0 = |\gamma| = g_e e / 2m_e \approx 1.76 \times 10^{11}$ rad·s⁻¹·T⁻¹ (positive magnitude)
- The minus sign in the precession term accounts for the electron's negative charge
- $\alpha$ is the Gilbert damping constant

### 9.1. Term-by-Term Breakdown

**Precession term:** $-\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}}$
- This causes $\mathbf{m}$ to rotate around $\mathbf{H}_{\text{eff}}$
- The angular frequency is $\omega = \gamma_0 H_{\text{eff}}$
- Energy is conserved by this term alone

**Damping term:** $\alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}$
- This is perpendicular to both $\mathbf{m}$ and $\frac{\partial \mathbf{m}}{\partial t}$
- It pushes $\mathbf{m}$ toward $\mathbf{H}_{\text{eff}}$
- It dissipates energy to the lattice

---

## 10. Energy Dissipation in the Gilbert Form

Let's verify that the Gilbert form dissipates energy. Using $\mathcal{E}$ as the total free energy:

$$\frac{d\mathcal{E}}{dt} = \int \frac{\delta \mathcal{E}}{\delta \mathbf{M}} \cdot \frac{\partial \mathbf{M}}{\partial t} dV = -\mu_0 \int \mathbf{H}_{\text{eff}} \cdot \frac{\partial \mathbf{M}}{\partial t} dV$$

From the Gilbert equation:

$$\frac{\partial \mathbf{M}}{\partial t} = \gamma \mathbf{M} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{M} \times \frac{\partial \mathbf{M}}{\partial t}$$

Wait, I need to be consistent. Let me use the form:

$$\frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}$$

with $\gamma_0 > 0$.

Then $\frac{\partial \mathbf{M}}{\partial t} = M_s \frac{\partial \mathbf{m}}{\partial t}$, and:

$$\frac{d\mathcal{E}}{dt} = -\mu_0 M_s \int \mathbf{H}_{\text{eff}} \cdot \left[ -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} \right] dV$$

First term: $\mathbf{H}_{\text{eff}} \cdot (\mathbf{m} \times \mathbf{H}_{\text{eff}}) = 0$.

Second term:

$$-\mu_0 M_s \alpha \int \mathbf{H}_{\text{eff}} \cdot \left( \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} \right) dV$$

Use the scalar triple product identity $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$:

$$\mathbf{H}_{\text{eff}} \cdot \left( \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} \right) = \mathbf{m} \cdot \left( \frac{\partial \mathbf{m}}{\partial t} \times \mathbf{H}_{\text{eff}} \right) = \frac{\partial \mathbf{m}}{\partial t} \cdot (\mathbf{H}_{\text{eff}} \times \mathbf{m})$$

From the Gilbert equation, rearrange:

$$\frac{\partial \mathbf{m}}{\partial t} - \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}}$$

Take the cross product with $\mathbf{m}$:

$$\mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} - \alpha \mathbf{m} \times (\mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}) = -\gamma_0 \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

Since $\mathbf{m} \cdot \frac{\partial \mathbf{m}}{\partial t} = 0$:

$$\mathbf{m} \times (\mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}) = \mathbf{m}(\mathbf{m} \cdot \frac{\partial \mathbf{m}}{\partial t}) - \frac{\partial \mathbf{m}}{\partial t} = -\frac{\partial \mathbf{m}}{\partial t}$$

So:

$$\mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} + \alpha \frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

This is getting complicated. Let me use a simpler approach. From the explicit form:

$$\frac{\partial \mathbf{m}}{\partial t} = -\frac{\gamma_0}{1+\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\alpha \gamma_0}{1+\alpha^2} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

Then:

$$\frac{d\mathcal{E}}{dt} = -\mu_0 M_s \int \mathbf{H}_{\text{eff}} \cdot \frac{\partial \mathbf{m}}{\partial t} dV$$

$$= -\mu_0 M_s \int \mathbf{H}_{\text{eff}} \cdot \left[ -\frac{\gamma_0}{1+\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\alpha \gamma_0}{1+\alpha^2} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}}) \right] dV$$

First term is zero. Second term:

$$= \frac{\mu_0 M_s \alpha \gamma_0}{1+\alpha^2} \int \mathbf{H}_{\text{eff}} \cdot [\mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})] dV$$

$$= \frac{\mu_0 M_s \alpha \gamma_0}{1+\alpha^2} \int \mathbf{H}_{\text{eff}} \cdot [\mathbf{m}(\mathbf{m}\cdot\mathbf{H}_{\text{eff}}) - \mathbf{H}_{\text{eff}}] dV$$

$$= \frac{\mu_0 M_s \alpha \gamma_0}{1+\alpha^2} \int [(\mathbf{m}\cdot\mathbf{H}_{\text{eff}})^2 - H_{\text{eff}}^2] dV$$

$$= -\frac{\mu_0 M_s \alpha \gamma_0}{1+\alpha^2} \int |\mathbf{H}_{\text{eff}}^{\perp}|^2 dV \leq 0$$

Since $\alpha > 0$, $\gamma_0 > 0$, $M_s > 0$, we have $d\mathcal{E}/dt \leq 0$. Energy decreases monotonically until $\mathbf{H}_{\text{eff}}^{\perp} = 0$, i.e., until $\mathbf{m}$ is parallel to $\mathbf{H}_{\text{eff}}$.

---

## 11. Special Cases and Limits

### 11.1. Small Damping ($\alpha \ll 1$)

$$\frac{\partial \mathbf{m}}{\partial t} \approx -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} - \alpha \gamma_0 \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

The magnetization precesses many times before relaxing. The relaxation time $\tau \sim 1/(\alpha \gamma_0 H_{\text{eff}})$.

### 11.2. Large Damping ($\alpha \gg 1$)

$$\frac{\partial \mathbf{m}}{\partial t} \approx -\frac{\gamma_0}{\alpha} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\gamma_0}{\alpha} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}}) \cdot \alpha$$

Actually, for $\alpha \gg 1$:

$$\frac{\partial \mathbf{m}}{\partial t} \approx -\frac{\gamma_0}{\alpha} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\gamma_0}{1} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

Wait, let me recalculate:

$$\frac{\partial \mathbf{m}}{\partial t} = -\frac{\gamma_0}{1+\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\alpha \gamma_0}{1+\alpha^2} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

For $\alpha \gg 1$:

$$\approx -\frac{\gamma_0}{\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\gamma_0}{\alpha} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})$$

The precession is strongly suppressed. The motion becomes almost purely relaxational, with velocity proportional to $1/\alpha$. This is the **overdamped limit**.

### 11.3. Critical Damping

There is no "critical damping" in the usual sense because the equation describes motion on a sphere, not a harmonic oscillator. However, the crossover from precession-dominated to relaxation-dominated occurs around $\alpha \sim 1$.

---

## 12. The LLG Equation with Spin Transfer Torque

In modern spintronics, when a spin-polarized current flows through a ferromagnet, it exerts a **spin transfer torque (STT)** on the magnetization. The LLG equation is generalized to:

$$\frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t} + \gamma_0 \beta (\mathbf{m} \times \mathbf{p}) \times \mathbf{m} + \gamma_0 \beta' \mathbf{m} \times \mathbf{p}$$

where:
- $\mathbf{p}$ is the spin polarization direction of the current
- $\beta$ parameterizes the **Slonczewski torque** (in-plane, damping-like)
- $\beta'$ parameterizes the **field-like torque**

The Slonczewski torque $\gamma_0 \beta (\mathbf{m} \times \mathbf{p}) \times \mathbf{m} = \gamma_0 \beta [\mathbf{p} - \mathbf{m}(\mathbf{m}\cdot\mathbf{p})]$ pushes $\mathbf{m}$ toward $\mathbf{p}$, acting like an anti-damping or additional damping depending on current direction.

---

## 13. Summary of the Full Derivation

| Step | Physics | Mathematics |
|------|---------|-------------|
| **1** | Magnetic moment in field | $U = -\boldsymbol{\mu}\cdot\mathbf{H}$, $\boldsymbol{\tau} = \boldsymbol{\mu} \times \mathbf{H}$ |
| **2** | Angular momentum | $\boldsymbol{\mu} = \gamma\mathbf{L}$, $\gamma < 0$ for electrons |
| **3** | Undamped precession | $\frac{d\mathbf{M}}{dt} = \gamma\mathbf{M}\times\mathbf{H}_{\text{eff}}$ |
| **4** | Magnitude conservation | $\mathbf{M}\cdot\frac{d\mathbf{M}}{dt} = 0 \implies |\mathbf{M}| = M_s$ |
| **5** | Need for damping | Energy must decrease; perpetual precession is unphysical |
| **6** | LL damping | Add $-\frac{\lambda}{M_s^2}\mathbf{M}\times(\mathbf{M}\times\mathbf{H}_{\text{eff}})$ |
| **7** | Gilbert damping | Replace $\mathbf{H}_{\text{eff}} \to \mathbf{H}_{\text{eff}} - \frac{\alpha}{\gamma M_s}\frac{d\mathbf{M}}{dt}$ |
| **8** | Solve implicit equation | Use vector triple product to get explicit form |
| **9** | Equivalence | $\gamma_{\text{LL}} = \gamma/(1+\alpha^2)$, $\lambda = |\gamma|\alpha M_s/(1+\alpha^2)$ |
| **10** | Energy dissipation | Show $d\mathcal{E}/dt = -\frac{\mu_0 M_s \alpha\gamma_0}{1+\alpha^2}\int|\mathbf{H}_{\text{eff}}^{\perp}|^2 dV \leq 0$ |

---

## 14. Final Equation

The **Landau-Lifshitz-Gilbert equation** in its most common modern form is:

$$\boxed{\frac{\partial \mathbf{m}}{\partial t} = -\frac{\gamma_0}{1+\alpha^2} \mathbf{m} \times \mathbf{H}_{\text{eff}} - \frac{\alpha\gamma_0}{1+\alpha^2} \mathbf{m} \times (\mathbf{m} \times \mathbf{H}_{\text{eff}})}$$

Or in implicit Gilbert form:

$$\frac{\partial \mathbf{m}}{\partial t} = -\gamma_0 \mathbf{m} \times \mathbf{H}_{\text{eff}} + \alpha \mathbf{m} \times \frac{\partial \mathbf{m}}{\partial t}$$

where:
- $\mathbf{m} = \mathbf{M}/M_s$ (unit magnetization)
- $\gamma_0 = g|e|/2m_e \approx 1.76086 \times 10^{11}$ rad·s⁻¹·T⁻¹
- $\alpha \in [0, 1]$ (typically) is the dimensionless Gilbert damping parameter
- $\mathbf{H}_{\text{eff}} = -\frac{1}{\mu_0 M_s}\frac{\delta \mathcal{E}}{\delta \mathbf{m}}$ is the effective field

This equation governs **all** non-equilibrium micromagnetic phenomena: domain wall motion, spin waves, vortex dynamics, switching in magnetic tunnel junctions, and the entire field of spintronics.