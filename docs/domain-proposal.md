# Proposal: Reserve a project domain (e.g. `farmore.network`)

## Summary

Farmore still has no canonical domain. We're currently leaning on
`farmore-network.github.io` and bare repo links, which is fine for early
development but won't hold up as the protocol moves toward mainnet. We should
register a primary domain and treat it as the project's root of trust for the
website, docs, and any future resolver/API endpoints.

## Why now

- **Identity & trust** — a protocol about *unified identity* should have one.
  Users, node operators, and integrators need a stable, official home that
  isn't a `*.github.io` subdomain.
- **Naming/handle namespace** — `@handle` resolution and SDK/wallet defaults
  will eventually want a real origin to point at.
- **Squatting risk** — the longer we wait, the more likely the obvious names
  get taken.

## Proposed

Register a primary domain, e.g.:

- `farmore.network` ✅ — registrable today, fits the protocol framing, and
  mirrors the existing `farmore-network` GitHub org.
- `farmore.xyz` / `farmore.dev` / `farmore.io` as fallbacks.

> Note: `.protocol` isn't a registrable TLD, so `farmore.protocol` won't work as
> an actual domain — keeping it here only as a naming idea.

## Next steps

- [ ] Pick the primary domain
- [ ] Register it
- [ ] Point the website at it (add a `CNAME` file to this repo / GitHub Pages settings)
- [ ] Reserve matching socials / namespace handles

---

_No code changes — this doc exists to track the decision._
