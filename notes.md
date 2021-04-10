Update Weapon
Modify A Weapon!
    <label>Name</label>
    <input id='update-name' type="text" name="name" value="${this.name}" class="input-text">
    <br><br>

    <label>Origin</label>
    <textarea id='update-origin' type="text" name="name" rows="4" cols="40" value="">${this.origin}</textarea>
    <br><br>

    <label>Description</label>
    <textarea id='update-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
    <br><br>

    <label>Video Link</label>
    <input id='update-video-url' type="text" name="image" value="${this.video_url}" class="input-text">
    <br><br>
  
    <label>Image Link</label>
    <input id='update-image-url' type="text" name="image" value="${this.image_url}" class="input-text">
    <br><br>
  
    <label>Category</label>
    <select id="categories" name="categories" value="${this.category.name}">
    <option value="1">Blunt</option>
    <option value="2">Sharp</option>
    <option value="3">Projectile</option>
    <option value="4">Legendary</option>
    <option value="5">Nonconformist</option>
    </select>
    <br><br>

  <input id='edit-button' type="submit" name="submit" value="Modify Weapon" class="submit">
</form>
  </div>
  <div class="modal-footer">
  </div>
</div>