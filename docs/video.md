# Checklist do Vídeo

## 1. Repositório (30s)
- [ ] Mostrar estrutura de pastas no GitHub (`terraform/`, `k8s/`, `application/`, `.github/workflows/`, `docs/`)
- [ ] Mostrar histórico de commits e PRs

## 2. Arquitetura (30s)
- [ ] Abrir `docs/architecture-aws.png` e explicar o fluxo: código → CI/CD → ECR → ArgoCD → EKS
- [ ] Mencionar dois ambientes: develop → dev, main → prd

## 3. PR bloqueado por falha (1min)
- [ ] Abrir PR #9 no GitHub
- [ ] Mostrar check ❌ Lint & Test failing
- [ ] Mostrar botão de merge bloqueado
- [ ] Abrir log e mostrar o erro: `AssertionError: 'ok' !== 'healthy'`

## 4. Pipeline completo com sucesso (1min30s)
- [ ] Abrir run de `develop` no GitHub Actions
- [ ] Mostrar ✅ Lint & Test e ✅ Build, Push & Deploy
- [ ] Mencionar push da imagem com SHA para ECR e atualização do kustomization.yaml

## 5. ArgoCD sincronizando (1min)
- [ ] Abrir UI do ArgoCD
- [ ] Mostrar app `rm565486-app-prd` com status Synced / Healthy
- [ ] Mostrar gráfico de recursos: Deployment, Service, Pods

## 6. Drift + Reconciliação (1min)
- [ ] Mostrar recurso deletado/alterado causando OutOfSync
- [ ] Mostrar ArgoCD reconciliando de volta para Synced automaticamente (selfHeal)

## 7. Rollback (1min)
- [ ] Abrir History and Rollback no ArgoCD
- [ ] Mostrar histórico de syncs
- [ ] Mostrar rollback para versão anterior e selfHeal reconvergindo para HEAD

## 8. Terraform (30s)
- [ ] Abrir run do CI/CD IaC no GitHub Actions
- [ ] Mostrar output: `Apply complete!`
- [ ] Mencionar VPC, EKS e ECR provisionados

## 9. Encerramento (30s)
- [ ] Mostrar branch protection rules em develop e main
- [ ] Resumir: GitOps completo, dois ambientes, CI bloqueante, reconciliação e rollback
