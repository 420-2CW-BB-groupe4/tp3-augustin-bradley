BEGIN
 ORDS.enable_schema(
 p_enabled => TRUE,
 p_schema => 'RESTSCOTT',
 p_url_mapping_type => 'BASE_PATH',
 p_url_mapping_pattern => 'hr2', --premiere partie url pour interroger les données
 p_auto_rest_auth => FALSE
 );
 COMMIT;
END;
/
