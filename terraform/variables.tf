variable "env" {
  description = "Deployment environment (dev or prd)"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "prd"], var.env)
    error_message = "env must be 'dev' or 'prd'."
  }
}
