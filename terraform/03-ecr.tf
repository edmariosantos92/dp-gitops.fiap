resource "aws_ecr_repository" "app" {
  count = var.env == "prd" ? 1 : 0

  name                 = "${local.project}-app"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Project     = local.project
    Environment = local.env
    ManagedBy   = "terraform"
  }
}

resource "aws_ecr_lifecycle_policy" "app" {
  count      = var.env == "prd" ? 1 : 0
  repository = aws_ecr_repository.app[0].name

  policy = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "Keep last 10 images"
        selection = {
          tagStatus   = "any"
          countType   = "imageCountMoreThan"
          countNumber = 10
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}
