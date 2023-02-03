import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {
  qualiteList = ['Nouveau', 'Second MAin', 'Remis à neuf'];
  productForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {

    /* Validation des champs */

    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      categorie: ['', Validators.required],
      qualite: ['', Validators.required],
      prix: ['', Validators.required],
      commentaire: ['', Validators.required],
      date: ['', Validators.required],
    });

    /* Edition du produits */

    if (this.editData) {
      this.actionBtn = 'update';

      /* Recuperation des chammps */

      this.productForm.controls['productName'].setValue(
        this.editData.productName
      );
      this.productForm.controls['categorie'].setValue(this.editData.categorie);
      this.productForm.controls['qualite'].setValue(this.editData.qualite);
      this.productForm.controls['prix'].setValue(this.editData.prix);
      this.productForm.controls['commentaire'].setValue(this.editData.commentaire);
      this.productForm.controls['date'].setValue(this.editData.date);
    }
  }

  addProduct() {
    let formData = this.productForm;
    if (!this.editData) {
      if (formData.valid) {
        this.api.postProduct(formData.value).subscribe({
          next: (res) => {
            alert('Product added successfuly');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: (e) => {
            alert('Error while adding' + e);
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Porduct update sooo good');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error not update product')
      },
    });
  }
}

