---
title: "Quantum Entanglement and Bell's Theorem"
topic: Physics
date: 2026-09-15
---

# Quantum Entanglement and Bell's Theorem

In May 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published a paper arguing that quantum mechanics must be incomplete. Their argument — the **EPR paradox** — centered on a phenomenon they found deeply troubling: what Einstein would later call *spooky action at a distance*. Today, that phenomenon has a name: **quantum entanglement**. And far from being a flaw in quantum theory, it is now known to be one of the most experimentally confirmed facts in physics.

## The EPR Paradox

EPR considered a pair of particles prepared so that their total momentum and relative position are precisely defined — what we would today call an **entangled state**. If you measure the position of particle A, you instantly know the position of particle B (since their relative position is fixed). If instead you measure the momentum of A, you instantly know the momentum of B.

Einstein found this intolerable. It seemed to imply that measuring particle A instantaneously affects the state of particle B, regardless of how far apart they are. For Einstein, this violated **locality** — the principle that objects can only be directly influenced by their immediate surroundings, and that influences propagate at most at the speed of light.

His conclusion: quantum mechanics must be **incomplete**. There must be additional *hidden variables* — unknown parameters that determine the outcomes of measurements in advance — that quantum mechanics simply ignores.

## What Entanglement Actually Means

In quantum mechanics, an entangled state is one that **cannot be factored** into independent states of its components. Consider two qubits (spin-1/2 particles). A separable (non-entangled) state might be:

$$|\psi\rangle = |\uparrow\rangle_A \otimes |\downarrow\rangle_B$$

An entangled state, by contrast, is:

$$|\Phi^+\rangle = \frac{1}{\sqrt{2}}\left(|\uparrow\rangle_A|\uparrow\rangle_B + |\downarrow\rangle_A|\downarrow\rangle_B\right)$$

This is a **Bell state** — one of the maximally entangled two-qubit states. Before measurement, neither particle has a definite spin. Upon measuring A, you obtain either ↑ or ↓ with equal probability. But the outcome is **perfectly correlated** with the result of measuring B: if A is ↑, B is guaranteed to be ↑; if A is ↓, B is ↓.

Crucially, this correlation exists no matter how far apart A and B are when measured. No information about A's outcome travels to B — the correlation was encoded in the joint quantum state from the moment of entanglement.

## Bell's Theorem (1964)

For nearly thirty years, EPR's argument stood as a philosophical challenge to quantum mechanics. Then in 1964, Irish physicist **John Stewart Bell** found a way to test it experimentally.

Bell's key insight: if hidden variables determine measurement outcomes in advance, and if those variables are **local** (not influenced by distant events), then the correlations between distant measurements must satisfy certain mathematical inequalities. If quantum mechanics is correct, those inequalities are **violated**.

### The CHSH Inequality

The most useful form, derived by Clauser, Horne, Shimony, and Holt in 1969, involves measuring correlations at four angle settings. Define:

$$S = |E(a,b) - E(a,b')| + |E(a',b) + E(a',b')| \leq 2$$

Here $E(a,b)$ is the correlation coefficient — the average of the product of outcomes ($\pm 1$) at settings $a$ and $b$.

For any **local hidden-variable theory**, $S \leq 2$.

Quantum mechanics predicts that for the optimal choice of angles ($a = 0°$, $a' = 45°$, $b = 22.5°$, $b' = 67.5°$):

$$S_{QM} = 2\sqrt{2} \approx 2.828$$

This is the **Tsirelson bound** — the maximum quantum violation of the CHSH inequality.

## Experimental Tests

### Aspect's Experiments (1982)

**Alain Aspect** and colleagues at the Institut d'Optique in Paris performed the most decisive early test. They used pairs of photons emitted by calcium atoms in a two-photon cascade, measuring polarization correlations. To close the locality loophole, they switched the measurement settings while the photons were in flight, so that no signal traveling at light speed could carry information from one detector to the other before measurement.

Result: $S = 2.697 \pm 0.015$ — a clear violation of $S \leq 2$, in excellent agreement with quantum mechanics.

### Loophole-Free Tests (2015)

Every early Bell test left at least one potential loophole:
- **Detection loophole**: If detectors are inefficient, the detected subset might not represent all pairs.
- **Locality loophole**: If measurements are not space-like separated, classical signaling could, in principle, explain correlations.

In 2015, three independent experiments simultaneously closed both loopholes:

1. **Hensen et al. (Delft)**: Used entangled electron spins in nitrogen-vacancy centers in diamond, separated by 1.3 km. Detection efficiency was high due to entanglement swapping.
2. **Giustina et al. (Vienna)**: Used high-efficiency photon detectors.
3. **Shalm et al. (NIST)**: Used photon pairs with near-100% detector efficiency.

All three confirmed quantum mechanical predictions with overwhelming statistical significance ($p < 10^{-9}$ in some cases). The 2022 Nobel Prize in Physics was awarded to Aspect, Clauser, and Zeilinger for these experiments.

**The verdict is unambiguous: local hidden variables are ruled out by experiment.**

## What It Does Not Mean

Entanglement is frequently misunderstood. Let us be precise about what it does *not* imply:

- **It does not allow faster-than-light communication.** When A measures her particle and gets ↑, she knows B will also get ↑. But she cannot control which outcome she gets. B's results look random until they are compared with A's via a classical channel. No information is transmitted.
- **It is not a mysterious connection through space.** The correlations are built into the quantum state. Measurement reveals a pre-existing (but not pre-determined) correlation — the outcome is genuinely random, but correlated.
- **It does not violate special relativity.** The no-communication theorem proves this rigorously.

## Non-locality vs. Non-realism

Bell's theorem requires *either* abandoning **locality** (influences propagate faster than light) *or* **realism** (physical properties have definite values independent of measurement), or both. Different interpretations of quantum mechanics make different choices:

| Interpretation | Locality | Realism | Explanation |
|----------------|----------|---------|-------------|
| Copenhagen | Yes* | No | Wavefunction collapse is not a physical process |
| Many-Worlds | Yes | Yes | All outcomes occur in branching universes |
| Bohmian Mechanics | **No** | Yes | Non-local pilot wave guides particles |
| Relational QM | Yes* | No | States are observer-relative |

*In the sense that measurement outcomes don't send signals; the formalism is locally defined.

There is no consensus on the right interpretation. Bell's theorem tells us only what nature is *not*: it is not locally realistic.

## Entanglement in Technology

Entanglement is not merely a philosophical puzzle — it is a resource for emerging technologies:

- **Quantum cryptography (QKD)**: The **E91 protocol** uses entangled photons to distribute cryptographic keys. Any eavesdropping disturbs the quantum state and is detectable via Bell inequality violations.
- **Quantum teleportation**: The quantum state of a particle can be "teleported" to a distant location using an entangled pair plus a classical channel. The original particle's state is destroyed in the process. This has been demonstrated over hundreds of kilometers.
- **Quantum computing**: Entanglement allows quantum computers to explore exponentially large state spaces. Algorithms like Shor's (factoring) and Grover's (search) exploit entanglement as a computational resource.
- **Quantum networks**: Entanglement distribution over long distances, via quantum repeaters, is the basis of the proposed **quantum internet**.

---

Bell's theorem is one of the most profound results in the history of science. It transformed a philosophical debate about the completeness of quantum mechanics into a matter that could be settled experimentally — and nature answered clearly: the universe is quantum mechanical through and through, and quantum entanglement is real. The universe is stranger than Einstein could accept, and experiments have proven it beyond any reasonable doubt.

---

*Further reading: John Bell, "Speakable and Unspeakable in Quantum Mechanics" (1987); Alain Aspect et al., Phys. Rev. Lett. 49, 91 (1982); Hensen et al., Nature 526, 682 (2015).*
